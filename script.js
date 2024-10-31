 function calcolaVoltaggio() {
            const intensita = parseFloat(document.getElementById('intensita').value);
            const resistenza = parseFloat(document.getElementById('resistenza').value);
            
            if (isNaN(intensita) || isNaN(resistenza)) {
                document.getElementById('risultato-voltaggio').innerText = 'Inserisci valori validi.';
                return;
            }
            
            const voltaggio = intensita * resistenza;
            document.getElementById('risultato-voltaggio').innerText = `Voltaggio (V): ${voltaggio} Volt`;
        }

        function calcolaIntensita() {
            const voltaggio = parseFloat(document.getElementById('voltaggio-intensita').value);
            const resistenza = parseFloat(document.getElementById('resistenza-intensita').value);
            
            if (isNaN(voltaggio) || isNaN(resistenza) || resistenza === 0) {
                document.getElementById('risultato-intensita').innerText = 'Inserisci valori validi.';
                return;
            }
            
            const intensita = voltaggio / resistenza;
            document.getElementById('risultato-intensita').innerText = `Intensità (I): ${intensita} Ampere`;
        }

        function calcolaResistenza() {
            const voltaggio = parseFloat(document.getElementById('voltaggio-resistenza').value);
            const intensita = parseFloat(document.getElementById('intensita-resistenza').value);
            
            if (isNaN(voltaggio) || isNaN(intensita) || intensita === 0) {
                document.getElementById('risultato-resistenza').innerText = 'Inserisci valori validi.';
                return;
            }
            
            const resistenza = voltaggio / intensita;
            document.getElementById('risultato-resistenza').innerText = `Resistenza (R): ${resistenza} Ohm`;
        }
