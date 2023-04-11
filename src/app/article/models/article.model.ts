export interface Article{

  data:  DatArticle[];
  total: number;
}

export interface DatArticle {
  id:        number;
  version:   number;
  clave:     string;
  nombre:    string;
  categoria: Categoria;
  precios:   Precio[];
  activo:    boolean;
}
export interface category{

  data:  Categoria[];
  total: number;
}

export interface Categoria {
  id:          number;
  version:     number;
  clave:       string;
  nombre:      string;
  fechaCreado: number;
  activo:    boolean;
}

export interface Precio {
  id:      number;
  version: number;
  precio:  number;
}
