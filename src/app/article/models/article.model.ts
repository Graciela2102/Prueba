export interface Article{

  data:  DatArticle[];
  total: number;
}

export interface DatArticle {
  id:        number;
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
  clave:       string;
  nombre:      string;
  fechaCreado: number;
  
}

export interface Precio {
  id:      number;
  version: number;
  precio:  number;
}
