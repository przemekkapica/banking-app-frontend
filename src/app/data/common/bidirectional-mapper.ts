export abstract class BidirectionalMapper<I, O> {
    abstract mapFrom?(param: I): O;
  
    abstract mapTo?(param: O): I;
}