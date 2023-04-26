window.onmessage = async (event) => {
    const { data } = event;
    console.log('Message received:', data); // Agregue esta l�nea
  
    if (data.pluginMessage) {
      const { type, payload } = data.pluginMessage;
      if (type === 'update-counter') {
        document.getElementById('counter').innerText = payload;
      }
    }
  };
  