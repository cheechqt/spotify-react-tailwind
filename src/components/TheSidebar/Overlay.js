

function TheSidebarOverlay() {
  return (
    <a href="#main" className="fixed inset-0 bg-black z-[90] pointer-events-none peer-target:pointer-events-auto peer-target:opacity-50 cursor-default opacity-0 lg:hidden transition-opacity">
      &nbsp;
    </a>
  )
}

export default TheSidebarOverlay;