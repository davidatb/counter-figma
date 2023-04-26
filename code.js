figma.showUI(__html__, { width: 400, height: 200 });

function updateCounter() {
  const selectedNodes = figma.currentPage.selection;
  const count = selectedNodes.length;
  console.log('Updating counter:', count); // Agregue esta línea
  figma.ui.postMessage({ type: 'update-counter', payload: count });
}

// Actualiza el contador cuando se cambia la selección de elementos
figma.on("selectionchange", () => {
  updateCounter();
});

// Actualiza el contador al inicio para tener en cuenta los elementos seleccionados previamente
updateCounter();
