import { Injectable } from "@angular/core"
import { Maybe } from "monet";

@Injectable({
  providedIn: "root"
})
export class StorageService {

  constructor() {}

  setValue(key: string, value: string): void {
    return window.localStorage.setItem(key, value)
  }

  getValue(key: string): Maybe<string> {
    return Maybe.fromNull(window.localStorage.getItem(key))
  }

  remove(key: string): void {
    return window.localStorage.removeItem(key)
  }
}
