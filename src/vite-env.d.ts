/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_HOST: string
	readonly VITE_APP_CATEGORIES: string
	readonly VITE_APP_PRODUCTS: string
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}