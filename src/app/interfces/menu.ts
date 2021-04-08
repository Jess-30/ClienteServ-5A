export interface Menu {
    titulo: string;
    subMenus: subMenu[];
}

export interface subMenu {
    titulo: string;
    url: string;
}