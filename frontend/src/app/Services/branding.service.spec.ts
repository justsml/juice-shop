import { TestBed } from '@angular/core/testing'
import { TranslateService } from '@ngx-translate/core'
import { of, Subject } from 'rxjs'
import { BrandingService } from './branding.service'
import { ConfigurationService } from './configuration.service'

describe('BrandingService', () => {
  let service: BrandingService
  let configurationService: any
  let translateService: any
  let languageChanges: Subject<any>

  beforeEach(() => {
    languageChanges = new Subject()
    configurationService = {
      getApplicationConfiguration: vi.fn().mockReturnValue(of({
        application: {
          name: 'Alt Shop',
          theme: 'neon-fire',
          branding: {
            translationOverrides: {
              '*': {
                ACCOUNT: 'Profile'
              },
              en: {
                TITLE_LOGIN: 'Sign in'
              },
              TITLE_BASKET: 'Bag'
            },
            cssVariables: {
              '--theme-primary': '#123456',
              'background': 'ignored'
            }
          }
        }
      }))
    }
    translateService = {
      currentLang: 'en',
      onLangChange: languageChanges.asObservable(),
      setTranslation: vi.fn()
    }

    document.title = ''
    document.body.className = 'bluegrey-lightgreen-theme extra-class'
    document.body.removeAttribute('style')

    TestBed.configureTestingModule({
      providers: [
        BrandingService,
        { provide: ConfigurationService, useValue: configurationService },
        { provide: TranslateService, useValue: translateService }
      ]
    })
    service = TestBed.inject(BrandingService)
  })

  afterEach(() => {
    document.body.className = ''
    document.body.removeAttribute('style')
  })

  it('should apply title, theme, CSS variable, and active language translations', () => {
    service.applyBranding()

    expect(document.title).toBe('Alt Shop')
    expect(document.body.classList.contains('neon-fire-theme')).toBe(true)
    expect(document.body.classList.contains('bluegrey-lightgreen-theme')).toBe(false)
    expect(document.body.classList.contains('extra-class')).toBe(true)
    expect(document.body.style.getPropertyValue('--theme-primary')).toBe('#123456')
    expect(document.body.style.getPropertyValue('background')).toBe('')
    expect(translateService.setTranslation).toHaveBeenCalledWith('en', {
      TITLE_BASKET: 'Bag',
      ACCOUNT: 'Profile',
      TITLE_LOGIN: 'Sign in'
    }, true)
  })

  it('should reapply global overrides when the language changes', () => {
    service.applyBranding()
    languageChanges.next({ lang: 'de' })

    expect(translateService.setTranslation).toHaveBeenLastCalledWith('de', {
      TITLE_BASKET: 'Bag',
      ACCOUNT: 'Profile'
    }, true)
  })
})
