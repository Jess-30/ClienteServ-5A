import { Injectable } from '@angular/core';
import { Menu } from '../interfces/menu';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menus: Menu[] = [
    {
      titulo: "Paginas",
      subMenus: [
        {
          titulo: "Home",
          url: "/home"
        },
        {
          titulo: "About",
          url: "/about"
        },
        {
          titulo: "Deshboard",
          url: "/deshboard"
        },
        {
          titulo: "contact",
          url: "/contact"

        }
      ]
    }
  ]

  obtenerMenus(): Menu[] {
    return this.menus;

  }
  constructor() { }
}
