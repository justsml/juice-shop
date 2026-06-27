import { TestBed } from '@angular/core/testing'

import { SocketIoService } from './socket-io.service'

describe('SocketIoService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SocketIoService]
        })
    })

    it('should be created', () => {
        const service = TestBed.inject(SocketIoService)

        expect(service).toBeTruthy()
    })
})
