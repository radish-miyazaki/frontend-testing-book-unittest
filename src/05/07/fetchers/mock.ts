import * as Fetchers from './index'
import { httpError, postMyAddressMock } from "./fixture";

export const mockPostMyAddress = (status = 200) => {
  if (status > 299) {
    return jest
      .spyOn(Fetchers, 'postMyAddress')
      .mockRejectedValueOnce(httpError);
  }

  return jest
    .spyOn(Fetchers, 'postMyAddress')
    .mockResolvedValueOnce(postMyAddressMock);
}