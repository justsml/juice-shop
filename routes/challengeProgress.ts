import { type Request, type Response } from 'express'
import { ChallengeModel } from '../models/challenge'

interface ChallengeProgress {
  key: string
  name: string
  category: string
  difficulty: number
  solved: boolean
  hasCodingChallenge: boolean
  codingChallengeStatus: number
}

const compareKeys = (a: string, b: string) => a.localeCompare(b)

const summarizeBy = (challenges: ChallengeProgress[], property: 'category' | 'difficulty') => {
  return challenges.reduce<Record<string, { total: number, solved: number }>>((summary, challenge) => {
    const key = String(challenge[property])
    summary[key] ??= { total: 0, solved: 0 }
    summary[key].total++
    if (challenge.solved) {
      summary[key].solved++
    }
    return summary
  }, {})
}

export function challengeProgress () {
  return async (req: Request, res: Response) => {
    const challenges = (await ChallengeModel.findAll({
      attributes: ['key', 'name', 'category', 'difficulty', 'solved', 'hasCodingChallenge', 'codingChallengeStatus'],
      order: [['key', 'ASC']]
    })).map(challenge => challenge.get({ plain: true }) as ChallengeProgress)

    const solvedChallenges = challenges.filter(challenge => challenge.solved)
    const codingChallenges = challenges.filter(challenge => challenge.hasCodingChallenge)
    const findItSolved = codingChallenges.filter(challenge => challenge.codingChallengeStatus >= 1)
    const fixItSolved = codingChallenges.filter(challenge => challenge.codingChallengeStatus >= 2)
    const solvedKeys = solvedChallenges.map(challenge => challenge.key).sort(compareKeys)
    const findItSolvedKeys = findItSolved.map(challenge => challenge.key).sort(compareKeys)
    const fixItSolvedKeys = fixItSolved.map(challenge => challenge.key).sort(compareKeys)
    const codingChallengeKeys = codingChallenges.map(challenge => challenge.key).sort(compareKeys)

    const totalCodingPhases = codingChallenges.length * 2
    const solvedCodingPhases = findItSolved.length + fixItSolved.length
    const total = challenges.length + totalCodingPhases
    const solved = solvedChallenges.length + solvedCodingPhases

    res.json({
      status: 'ok',
      total,
      solved,
      unsolved: total - solved,
      challenges: {
        total: challenges.length,
        solved: solvedChallenges.length,
        unsolved: challenges.length - solvedChallenges.length,
        solvedKeys,
        unsolvedKeys: challenges
          .filter(challenge => !challenge.solved)
          .map(challenge => challenge.key)
          .sort(compareKeys)
      },
      codingChallenges: {
        total: totalCodingPhases,
        solved: solvedCodingPhases,
        unsolved: totalCodingPhases - solvedCodingPhases,
        available: codingChallenges.length,
        availableKeys: codingChallengeKeys,
        findIt: {
          total: codingChallenges.length,
          solved: findItSolved.length,
          unsolved: codingChallenges.length - findItSolved.length,
          solvedKeys: findItSolvedKeys,
          unsolvedKeys: codingChallengeKeys.filter(key => !findItSolvedKeys.includes(key))
        },
        fixIt: {
          total: codingChallenges.length,
          solved: fixItSolved.length,
          unsolved: codingChallenges.length - fixItSolved.length,
          solvedKeys: fixItSolvedKeys,
          unsolvedKeys: codingChallengeKeys.filter(key => !fixItSolvedKeys.includes(key))
        }
      },
      byCategory: summarizeBy(challenges, 'category'),
      byDifficulty: summarizeBy(challenges, 'difficulty')
    })
  }
}
