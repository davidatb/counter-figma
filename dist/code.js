console.log("code.js loaded");

figma.showUI(__html__, { width: 200, height: 200 });

function updateCounter() {
  const selectedNodes = figma.currentPage.selection;
  const count = selectedNodes.length;
  console.log('Updating counter:', count);
  console.log('Sending message to UI:', { type: 'update-counter', payload: count }); // Agregar esta l�nea
  figma.ui.postMessage({ type: 'update-counter', payload: count });
}


// Actualiza el contador cuando se cambia la selecci�n de elementos
figma.on("selectionchange", () => {
  updateCounter();
});

// Actualiza el contador al inicio para tener en cuenta los elementos seleccionados previamente
updateCounter();
