export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <span className="text-lg font-extrabold text-primary font-mono">
              Garrita
            </span>
            <p className="mt-1 text-sm text-muted-foreground">
              Snacks naturales para perros y gatos
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            San Martin de los Andes, Neuquen, Argentina
          </p>
        </div>
      </div>
    </footer>
  )
}
