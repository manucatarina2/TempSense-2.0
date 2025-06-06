// Model selection functionality
        const modelCards = document.querySelectorAll('[id^="model-"]');
        const summaryModel = document.getElementById('summary-model');
        const summaryLicense = document.getElementById('summary-license');
        const summaryTotal = document.getElementById('summary-total');
        
        // Payment method toggle
        const creditCardRadio = document.getElementById('credit-card');
        const boletoRadio = document.getElementById('boleto');
        const pixRadio = document.getElementById('pix');
        const creditCardForm = document.getElementById('credit-card-form');
        
        // Default selected model (Coral)
        let selectedModel = 'coral';
        
        // Model prices and license fees
        const models = {
            'lagoa': { name: 'Lagoa', price: 799.00, license: 249.00 },
            'oceano': { name: 'Oceano', price: 899.00, license: 249.00 },
            'eco': { name: 'Eco', price: 1199.00, license: 249.00 },
            'coral': { name: 'Coral', price: 1299.00, license: 299.00 },
            'familia': { name: 'Família', price: 1599.00, license: 299.00 },
            'terapia': { name: 'Terapia', price: 1799.00, license: 349.00 },
            'atlantico': { name: 'Atlântico', price: 1899.00, license: 349.00 },
            'pacifico': { name: 'Pacífico', price: 2499.00, license: 349.00 }
        };
        
        // Format currency
        function formatCurrency(value) {
            return `R$ ${value.toFixed(2).replace('.', ',')}`;
        }
        
        // Update summary based on selected model
        function updateSummary(modelId) {
            const model = models[modelId];
            summaryModel.innerHTML = `<span>Chuveiro ${model.name}:</span><span class="font-medium">${formatCurrency(model.price)}</span>`;
            summaryLicense.innerHTML = `<span>Licença Perpétua:</span><span class="font-medium">${formatCurrency(model.license)}</span>`;
            summaryTotal.textContent = formatCurrency(model.price + model.license);
        }
        
        // Set initial selection
        document.getElementById('model-coral').classList.add('border-sky-500', 'bg-sky-50');
        updateSummary('coral');
        
        // Add click event to model cards
        modelCards.forEach(card => {
            card.addEventListener('click', () => {
                // Remove highlight from all cards
                modelCards.forEach(c => {
                    c.classList.remove('border-sky-500', 'bg-sky-50');
                });
                
                // Add highlight to selected card
                card.classList.add('border-sky-500', 'bg-sky-50');
                
                // Update selected model
                selectedModel = card.id.replace('model-', '');
                updateSummary(selectedModel);
            });
        });
        
        // Payment method toggle
        creditCardRadio.addEventListener('change', () => {
            creditCardForm.style.display = 'block';
        });
        
        boletoRadio.addEventListener('change', () => {
            creditCardForm.style.display = 'none';
        });
        
        pixRadio.addEventListener('change', () => {
            creditCardForm.style.display = 'none';
        });
        
        // Form submission
        document.getElementById('checkout-form').addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                company: document.getElementById('company').value,
                serial: document.getElementById('serial').value,
                paymentMethod: document.querySelector('input[name="payment"]:checked').value,
                model: selectedModel,
                total: models[selectedModel].price + models[selectedModel].license
            };
            
            // Show success message
            alert(`Compra realizada com sucesso!\n\nDetalhes da compra:\nModelo: ${models[selectedModel].name}\nTotal: ${formatCurrency(formData.total)}\n\nObrigado pela preferência!`);
            
            // In a real application, you would send this data to a server
            console.log('Form submitted:', formData);
        });