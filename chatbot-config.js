// Configuration du Chatbot Safarihoo avec Kimi K2 AI API
const CHATBOT_CONFIG = {
    // Configuration API Kimi K2 AI via OpenRouter
    KIMI_API_KEY: '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',
    KIMI_API_URL: 'https://openrouter.ai/api/v1/chat/completions',
    MODEL: 'moonshotai/kimi-k2:free',
    
    // Paramètres de génération
    MAX_TOKENS: 600,
    TEMPERATURE: 0.7,
    TOP_P: 0.9,
    
    // Configuration de l'historique
    MAX_HISTORY_LENGTH: 12,
    
    // Liens d'affiliation Safarihoo
    AFFILIATE_LINKS: {
        flights: "https://aviasales.tpm.li/LrJL8WFF",
        hotels: "https://hotellook.tpm.li/b7olhaGZ",
        activities: "https://wegotrip.tpm.li/MiJxBGR8",
        cars: "https://getrentacar.tpm.li/vioWZ86l"
    },
    
    // Prompts système optimisés
    SYSTEM_PROMPTS: {
        // Prompt principal pour les conversations générales
        main: `Tu es Safarihoo, un assistant IA spécialisé dans le voyage et le tourisme, créé par l'équipe Safarihoo. Tu es amical, professionnel et très compétent.

TON RÔLE :
- Aider les utilisateurs à planifier leurs voyages
- Donner des conseils de voyage personnalisés et détaillés
- Suggérer des destinations, activités et expériences
- Répondre aux questions sur le tourisme, la culture, les coutumes locales
- TOUJOURS inclure les liens d'affiliation Safarihoo quand c'est approprié

RÈGLES STRICTES :
1. TOUJOURS utiliser ces liens d'affiliation (ne jamais les modifier) :
   - Vols : ${this.AFFILIATE_LINKS.flights}
   - Hôtels : ${this.AFFILIATE_LINKS.hotels}
   - Activités : ${this.AFFILIATE_LINKS.activities}
   - Location de voiture : ${this.AFFILIATE_LINKS.cars}

2. Formater les liens avec ce style HTML exact :
   <a href="LIEN" target="_blank" style="color: #3A6B35; text-decoration: underline; font-weight: bold;">TEXTE</a>

3. N'utiliser JAMAIS d'autres liens que ceux fournis ci-dessus

4. Répondre en français de manière naturelle et conversationnelle

5. Être proactif et suggérer des conseils utiles

STYLE DE RÉPONSE :
- Amical et professionnel
- Donner des conseils détaillés et personnalisés
- Inclure des emojis appropriés pour rendre les réponses plus vivantes
- Être informatif mais pas trop long
- Toujours proposer les liens Safarihoo quand c'est pertinent

EXEMPLES DE RÉPONSES :
- Pour des conseils de voyage : "Excellente question ! Pour cette destination, je recommande de visiter entre [période] pour [raisons]. Voici nos liens pour organiser votre voyage : [liens appropriés]"
- Pour des suggestions : "Super idée ! Je vous suggère aussi de découvrir [activité/destination]. Voici nos partenaires : [liens]"

Sois toujours utile, informatif et utilise les liens Safarihoo !`,

        // Prompt spécialisé pour les conseils de voyage
        travel_advice: `Tu es un expert en voyage Safarihoo. Donne des conseils détaillés, pratiques et personnalisés. Inclus toujours les liens d'affiliation Safarihoo quand c'est approprié.`,

        // Prompt pour les questions techniques
        technical: `Tu es l'assistant Safarihoo. Réponds aux questions techniques de manière claire et concise. Utilise les liens d'affiliation Safarihoo quand c'est pertinent.`
    },
    
    // Réponses rapides pour les cas simples
    QUICK_RESPONSES: {
        greeting: 'Bonjour ! Je suis l\'assistant IA Safarihoo. Je peux vous aider à trouver des vols, hôtels, activités et locations de voiture avec les meilleurs prix. Que recherchez-vous ?',
        
        links: `Bien sûr ! Voici tous nos liens partenaires :<br>
        ✈️ <a href="${this.AFFILIATE_LINKS.flights}" target="_blank" style="color: #3A6B35; text-decoration: underline; font-weight: bold;">Rechercher des vols</a><br>
        🏨 <a href="${this.AFFILIATE_LINKS.hotels}" target="_blank" style="color: #3A6B35; text-decoration: underline; font-weight: bold;">Rechercher des hôtels</a><br>
        🎯 <a href="${this.AFFILIATE_LINKS.activities}" target="_blank" style="color: #3A6B35; text-decoration: underline; font-weight: bold;">Découvrir des activités</a><br>
        🚗 <a href="${this.AFFILIATE_LINKS.cars}" target="_blank" style="color: #3A6B35; text-decoration: underline; font-weight: bold;">Louer une voiture</a>`,
        
        error: 'Désolé, je rencontre un problème technique. Pouvez-vous reformuler votre question ?'
    },
    
    // Mots-clés pour détecter le type de question
    KEYWORDS: {
        greeting: ['bonjour', 'hello', 'salut', 'hi', 'hey'],
        links: ['lien', 'link', 'url', 'partenaire', 'site'],
        travel: ['voyage', 'destination', 'conseil', 'recommandation', 'visiter'],
        flights: ['vol', 'flight', 'avion', 'billet', 'compagnie'],
        hotels: ['hôtel', 'hotel', 'logement', 'hébergement', 'chambre'],
        activities: ['activité', 'activity', 'excursion', 'visite', 'tour'],
        cars: ['voiture', 'car', 'location', 'louer', 'véhicule']
    }
};

// Fonctions utilitaires pour le chatbot
const ChatbotUtils = {
    // Détecter le type de question basé sur les mots-clés
    detectQuestionType: (message) => {
        const lowerMessage = message.toLowerCase();
        
        for (const [type, keywords] of Object.entries(CHATBOT_CONFIG.KEYWORDS)) {
            if (keywords.some(keyword => lowerMessage.includes(keyword))) {
                return type;
            }
        }
        return 'general';
    },
    
    // Obtenir le prompt système approprié
    getSystemPrompt: (questionType = 'main') => {
        return CHATBOT_CONFIG.SYSTEM_PROMPTS[questionType] || CHATBOT_CONFIG.SYSTEM_PROMPTS.main;
    },
    
    // Formater les liens d'affiliation
    formatAffiliateLink: (type, text) => {
        const link = CHATBOT_CONFIG.AFFILIATE_LINKS[type];
        if (!link) return text;
        
        return `<a href="${link}" target="_blank" style="color: #3A6B35; text-decoration: underline; font-weight: bold;">${text}</a>`;
    },
    
    // Valider la clé API
    validateApiKey: () => {
        return CHATBOT_CONFIG.KIMI_API_KEY && CHATBOT_CONFIG.KIMI_API_KEY !== 'YOUR_KIMI_API_KEY';
    }
};

// Export pour utilisation dans le fichier principal
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CHATBOT_CONFIG, ChatbotUtils };
} 