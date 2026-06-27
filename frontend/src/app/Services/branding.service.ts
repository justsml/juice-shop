import { DOCUMENT } from '@angular/common'
import { Injectable, inject } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'
import { type Config, ConfigurationService } from './configuration.service'

type TranslationOverrides = Record<string, string | Record<string, string>>

@Injectable({
  providedIn: 'root'
})
export class BrandingService {
  private readonly configurationService = inject(ConfigurationService)
  private readonly document = inject<Document>(DOCUMENT)
  private readonly translate = inject(TranslateService)

  private hasSubscribedToLanguageChanges = false
  private translationOverrides: TranslationOverrides = {}

  applyBranding (): void {
    this.configurationService.getApplicationConfiguration().subscribe({
      next: (config) => {
        this.applyApplicationBranding(config)
        this.translationOverrides = config.application?.branding?.translationOverrides ?? {}
        this.applyTranslationOverrides()
        this.subscribeToLanguageChanges()
      },
      error: (err) => { console.log(err) }
    })
  }

  private applyApplicationBranding (config: Config): void {
    const application = config.application
    if (!application) {
      return
    }
    if (application.name) {
      this.document.title = application.name
    }
    if (application.theme) {
      this.applyTheme(application.theme)
    }
    this.applyCssVariables(application.branding?.cssVariables ?? {})
  }

  private applyTheme (theme: string): void {
    const themeClasses = Array.from(this.document.body.classList).filter((className) => className.endsWith('-theme'))
    this.document.body.classList.remove(...themeClasses)
    this.document.body.classList.add(`${theme}-theme`)
  }

  private applyCssVariables (cssVariables: Record<string, string>): void {
    Object.entries(cssVariables).forEach(([property, value]) => {
      if (property.startsWith('--') && typeof value === 'string') {
        this.document.body.style.setProperty(property, value)
      }
    })
  }

  private subscribeToLanguageChanges (): void {
    if (this.hasSubscribedToLanguageChanges) {
      return
    }
    this.hasSubscribedToLanguageChanges = true
    this.translate.onLangChange.subscribe(({ lang }) => {
      this.applyTranslationOverrides(lang)
    })
  }

  private applyTranslationOverrides (lang = this.translate.currentLang || 'en'): void {
    const overrides = this.translationOverridesFor(lang)
    if (Object.keys(overrides).length > 0) {
      this.translate.setTranslation(lang, overrides, true)
    }
  }

  private translationOverridesFor (lang: string): Record<string, string> {
    const overrides: Record<string, string> = {}
    Object.entries(this.translationOverrides).forEach(([key, value]) => {
      if (typeof value === 'string') {
        overrides[key] = value
      }
    })
    this.mergeNamedOverride(overrides, '*')
    this.mergeNamedOverride(overrides, 'default')
    this.mergeNamedOverride(overrides, lang)
    return overrides
  }

  private mergeNamedOverride (overrides: Record<string, string>, key: string): void {
    const namedOverride = this.translationOverrides[key]
    if (this.isTranslationMap(namedOverride)) {
      Object.assign(overrides, namedOverride)
    }
  }

  private isTranslationMap (value: string | Record<string, string> | undefined): value is Record<string, string> {
    return typeof value === 'object' && value !== null && !Array.isArray(value)
  }
}
