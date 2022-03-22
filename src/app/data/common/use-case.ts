export interface UseCase<TRequest, TPresenter> {
  call(request: TRequest): Promise<TPresenter>;
}