import { TestBed } from '@angular/core/testing';

import { DeviceWidthService } from './device-width.service';

describe('DeviceWidthService', () => {
  let service: DeviceWidthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceWidthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
