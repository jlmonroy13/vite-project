interface ImportMetaEnv {
  readonly NEXT_PUBLIC_VARIABLE_NAME: string;
  readonly REACT_APP_VARIABLE_NAME: string;
  // Añade aquí otras variables de entorno que necesites
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
