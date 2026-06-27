import { TestBed } from '@angular/core/testing'

import { WindowRefService } from './window-ref.service'

describe('WindowRefService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [WindowRefService]
        })
    })

    it('should be created', () => {
        const service = TestBed.inject(WindowRefService)

        expect(service).toBeTruthy()
    })
})
