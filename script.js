// Chatbot Knowledge Base
const chatbotKnowledge = {
    greetings: {
        patterns: ['hola', 'hi', 'buenos días', 'buenas tardes', 'buenas noches', 'saludos'],
        responses: [
            '¡Hola! Estoy aquí para ayudarte con todas tus preguntas sobre BioSmart Mobile Home.',
            '¡Buenos días! ¿En qué puedo asistirte hoy?',
            'Hola, es un placer ayudarte. ¿Qué te gustaría saber sobre nuestras casas móviles inteligentes?'
        ]
    },
    features: {
        patterns: ['características', 'qué incluye', 'funciones', 'qué tiene', 'caracteristicas'],
        responses: [
            'Nuestras casas móviles inteligentes incluyen:\n\n' +
            '🏠 **Automatización del Hogar**: Control centralizado de todos los sistemas\n' +
            '💡 **Iluminación Inteligente**: Control de intensidad y tonalidad\n' +
            '🌡️ **Climatización Inteligente**: Termostatos programables y eficientes\n' +
            '🪟 **Control de Persianas**: Optimización de luz natural\n' +
            '🔌 **Electrodomésticos Inteligentes**: Gestión remota\n' +
            '🌱 **Eficiencia Energética**: Diseño sostenible y eco-amigable\n\n' +
            '¿Te gustaría saber más sobre alguna característica en particular?'
        ]
    },
    automation: {
        patterns: ['automatización', 'domótica', 'cómo funciona', 'control remoto', 'automatizacion'],
        responses: [
            'La automatización del hogar te permite controlar todos los sistemas de tu casa móvil de forma centralizada:\n\n' +
            '📱 **Aplicación Móvil**: Controla todo desde tu smartphone, estés donde estés\n' +
            '🎤 **Asistentes de Voz**: Compatible con Alexa, Google Assistant y Siri\n' +
            '⏰ **Programación**: Configura rutinas automáticas según tus horarios\n' +
            '🔐 **Seguridad**: Monitoreo en tiempo real y alertas inteligentes\n\n' +
            'Todo se integra en un solo sistema fácil de usar. ¿Tienes alguna pregunta específica sobre la automatización?'
        ]
    },
    energy: {
        patterns: ['energía', 'ahorro', 'eficiencia', 'consumo', 'factura', 'sostenibilidad', 'energia', 'sostenible'],
        responses: [
            'Nuestras casas móviles están diseñadas para maximizar la eficiencia energética:\n\n' +
            '💰 **Ahorro Promedio**: Hasta un 40% de reducción en facturas de energía\n' +
            '🌞 **Tecnologías Verdes**: Integración con paneles solares opcionales\n' +
            '🌡️ **Climatización Inteligente**: Ajuste automático según ocupación y rutinas\n' +
            '💡 **Iluminación LED**: Consumo mínimo con máximo confort\n' +
            '🪟 **Gestión de Ventanas**: Optimización pasiva de temperatura\n\n' +
            'El diseño sostenible no solo ahorra dinero, también cuida el planeta. ¿Quieres conocer más detalles?'
        ]
    },
    lighting: {
        patterns: ['iluminación', 'luces', 'luz', 'iluminacion'],
        responses: [
            'El sistema de iluminación inteligente ofrece:\n\n' +
            '✨ **Control Total**: Encendido/apagado, intensidad y color\n' +
            '🎨 **Ambientes Personalizados**: Crea diferentes escenarios (trabajo, relax, fiesta)\n' +
            '⏰ **Programación Automática**: Se ajusta según la hora del día\n' +
            '🌅 **Simulación Natural**: Luces que imitan la luz solar\n' +
            '📱 **Control Remoto**: Gestiona desde cualquier lugar\n\n' +
            '¿Te gustaría saber cómo configurar diferentes ambientes?'
        ]
    },
    climate: {
        patterns: ['climatización', 'temperatura', 'calefacción', 'aire acondicionado', 'termostato', 'clima', 'climatizacion'],
        responses: [
            'La climatización inteligente incluye:\n\n' +
            '🌡️ **Termostatos Programables**: Aprenden tus rutinas\n' +
            '📊 **Optimización Automática**: Ajuste inteligente para ahorrar energía\n' +
            '👥 **Detección de Presencia**: Se activa solo cuando hay personas\n' +
            '📱 **Control Remoto**: Ajusta la temperatura desde tu móvil\n' +
            '🌿 **Modo Eco**: Reduce consumo sin perder confort\n\n' +
            'El sistema puede ahorrarte hasta un 30% en calefacción y refrigeración.'
        ]
    },
    appliances: {
        patterns: ['electrodomésticos', 'nevera', 'lavadora', 'aspiradora', 'electrodomesticos'],
        responses: [
            'Nuestros electrodomésticos inteligentes incluyen:\n\n' +
            '🧊 **Neveras Inteligentes**: Gestión de inventario y recetas\n' +
            '🧺 **Lavadoras Conectadas**: Programación y monitoreo remoto\n' +
            '🤖 **Aspiradoras Robotizadas**: Limpieza automática programada\n' +
            '🎤 **Control por Voz**: Comandos simples para todas las funciones\n' +
            '📊 **Monitoreo de Consumo**: Conoce el uso de energía en tiempo real\n\n' +
            'Todos los electrodomésticos se integran con el sistema central de automatización.'
        ]
    },
    price: {
        patterns: ['precio', 'costo', 'cuánto cuesta', 'tarifa', 'pago'],
        responses: [
            'Para obtener información detallada sobre precios y planes de financiamiento, te recomiendo:\n\n' +
            '📞 Contactar con nuestro equipo de ventas\n' +
            '📧 Solicitar una cotización personalizada\n' +
            '💬 Agendar una visita virtual o presencial\n\n' +
            'Cada proyecto es único y personalizado según tus necesidades. ¿Te gustaría que te ayude a preparar tus preguntas para el equipo de ventas?'
        ]
    },
    sustainability: {
        patterns: ['sostenible', 'medio ambiente', 'ecológico', 'verde', 'eco', 'sostenibilidad'],
        responses: [
            'La sostenibilidad es el corazón de BioSmart Mobile Home:\n\n' +
            '🌱 **Materiales Ecológicos**: Construcción con materiales reciclables\n' +
            '⚡ **Energía Renovable**: Compatible con paneles solares\n' +
            '💧 **Gestión del Agua**: Sistemas de reciclaje y optimización\n' +
            '🌿 **Baja Huella de Carbono**: Diseño eficiente y transporte optimizado\n' +
            '♻️ **Ciclo de Vida Sostenible**: Durabilidad y reciclaje al final de su vida útil\n\n' +
            'Vivir de forma responsable con el planeta nunca fue tan fácil y cómodo.'
        ]
    },
    default: {
        responses: [
            'Interesante pregunta. Déjame ayudarte con eso. ¿Podrías ser más específico? Puedo ayudarte con:\n\n' +
            '• Características y funciones\n' +
            '• Automatización y domótica\n' +
            '• Eficiencia energética\n' +
            '• Iluminación inteligente\n' +
            '• Climatización\n' +
            '• Electrodomésticos\n' +
            '• Sostenibilidad\n\n' +
            '¿Sobre cuál de estos temas te gustaría saber más?',
            'Entiendo tu consulta. ¿Podrías reformularla? Estoy aquí para ayudarte con información sobre nuestras casas móviles inteligentes.',
            'Para darte la mejor respuesta, podrías ser más específico. ¿Qué aspecto de BioSmart Mobile Home te interesa más?'
        ]
    }
};

// Chatbot State
let chatbotOpen = true;

// Initialize chatbot
function initChatbot() {
    addMessage('bot', '¡Bienvenido a BioSmart Mobile Home! 👋\n\nSoy tu asistente virtual. Puedo ayudarte con información sobre:\n\n• Características y funciones\n• Automatización inteligente\n• Eficiencia energética\n• Sostenibilidad\n\n¿En qué puedo ayudarte?');
}

// Toggle chatbot
function toggleChatbot() {
    chatbotOpen = !chatbotOpen;
    const body = document.getElementById('chatbotBody');
    const icon = document.getElementById('toggleIcon');
    
    if (chatbotOpen) {
        body.style.display = 'flex';
        icon.textContent = '−';
    } else {
        body.style.display = 'none';
        icon.textContent = '+';
    }
}

// Add message to chatbot
function addMessage(sender, text) {
    const messagesContainer = document.getElementById('chatbotMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    // Format text with line breaks
    const paragraphs = text.split('\n\n');
    paragraphs.forEach(para => {
        const p = document.createElement('p');
        // Handle bold text
        p.innerHTML = para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        contentDiv.appendChild(p);
    });
    
    messageDiv.appendChild(contentDiv);
    messagesContainer.appendChild(messageDiv);
    
    // Hide suggestions after user sends a message
    if (sender === 'user') {
        const suggestions = document.getElementById('chatbotSuggestions');
        suggestions.style.display = 'none';
    }
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Get bot response
function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase().trim();
    
    // Check for greetings
    for (const pattern of chatbotKnowledge.greetings.patterns) {
        if (message.includes(pattern)) {
            return chatbotKnowledge.greetings.responses[
                Math.floor(Math.random() * chatbotKnowledge.greetings.responses.length)
            ];
        }
    }
    
    // Check other patterns
    for (const [key, value] of Object.entries(chatbotKnowledge)) {
        if (key === 'default' || key === 'greetings') continue;
        for (const pattern of value.patterns) {
            if (message.includes(pattern)) {
                return value.responses[
                    Math.floor(Math.random() * value.responses.length)
                ];
            }
        }
    }
    
    // Default response
    return chatbotKnowledge.default.responses[
        Math.floor(Math.random() * chatbotKnowledge.default.responses.length)
    ];
}

// Send message
function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    
    if (message === '') return;
    
    // Add user message
    addMessage('user', message);
    
    // Clear input
    input.value = '';
    
    // Simulate typing delay
    setTimeout(() => {
        const response = getBotResponse(message);
        addMessage('bot', response);
    }, 500);
}

// Send suggestion
function sendSuggestion(suggestion) {
    document.getElementById('userInput').value = suggestion;
    sendMessage();
}

// Handle enter key
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Scroll to features
function scrollToFeatures() {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}

// Scroll to contact
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Scroll to gallery
function scrollToGallery() {
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
}

// Contact Form Handler
function initContactForm() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const submitButton = form.querySelector('.submit-button');
    const buttonText = submitButton.querySelector('.button-text');
    const buttonLoader = submitButton.querySelector('.button-loader');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Show loading state
        submitButton.disabled = true;
        buttonText.style.display = 'none';
        buttonLoader.style.display = 'inline-block';
        formMessage.style.display = 'none';
        formMessage.className = 'form-message';

        // Get form data
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success
                formMessage.textContent = '¡Mensaje enviado exitosamente! Te contactaremos pronto.';
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';
                form.reset();

                // Scroll to message
                formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                // Error from Formspree
                const data = await response.json();
                if (data.errors) {
                    formMessage.textContent = data.errors.map(error => error.message).join(', ');
                } else {
                    formMessage.textContent = 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.';
                }
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
            }
        } catch (error) {
            // Network error
            formMessage.textContent = 'Error de conexión. Por favor, verifica tu conexión a internet e intenta de nuevo.';
            formMessage.className = 'form-message error';
            formMessage.style.display = 'block';
        } finally {
            // Reset button state
            submitButton.disabled = false;
            buttonText.style.display = 'inline';
            buttonLoader.style.display = 'none';
        }
    });
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    initChatbot();
    initContactForm();
});

// Chatbase Integration
(function(){
    if(!window.chatbase||window.chatbase("getState")!=="initialized"){
        window.chatbase=(...arguments)=>{
            if(!window.chatbase.q){
                window.chatbase.q=[]
            }
            window.chatbase.q.push(arguments)
        };
        window.chatbase=new Proxy(window.chatbase,{
            get(target,prop){
                if(prop==="q"){
                    return target.q
                }
                return(...args)=>target(prop,...args)
            }
        })
    }
    const onLoad=function(){
        const script=document.createElement("script");
        script.src="https://www.chatbase.co/embed.min.js";
        script.id="j7lN1PTYRYIDoE_vONcbH";
        script.domain="www.chatbase.co";
        document.body.appendChild(script)
    };
    if(document.readyState==="complete"){
        onLoad()
    }else{
        window.addEventListener("load",onLoad)
    }
})();

