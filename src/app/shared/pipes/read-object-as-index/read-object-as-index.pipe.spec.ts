import { ReadObjectAsIndexPipe } from 'src/app/shared/pipes/read-object-as-index/read-object-as-index.pipe';

describe('ReadObjectAsIndexPipe', () => {
  it('create an instance', () => {
    const pipe = new ReadObjectAsIndexPipe();
    expect(pipe).toBeTruthy();
  });
});
