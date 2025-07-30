# Configuration du Chatbot Safarihoo avec DeepSeek API

## 🚀 Optimisations Apportées

Le chatbot a été entièrement optimisé pour offrir des réponses plus intelligentes et dynamiques tout en conservant l'intégration des liens d'affiliation Safarihoo.

### ✨ Nouvelles Fonctionnalités

1. **Réponses IA Intelligentes** : Utilisation de l'API DeepSeek pour des réponses naturelles et contextuelles
2. **Historique de Conversation** : Maintien du contexte sur plusieurs messages
3. **Détection de Type de Question** : Réponses adaptées selon le type de demande
4. **Prompts Optimisés** : Instructions détaillées pour des réponses de qualité
5. **Fallback Intelligent** : Retour aux réponses statiques en cas d'erreur API
6. **Gestion Asynchrone** : Indicateurs de chargement et gestion d'erreurs

## 🔧 Configuration

### 1. Obtenir une Clé API DeepSeek

1. Rendez-vous sur [DeepSeek Console](https://platform.deepseek.com/)
2. Créez un compte ou connectez-vous
3. Générez une nouvelle clé API
4. Copiez la clé API

### 2. Configuration du Chatbot

#### Option A : Configuration Directe dans index.html

Remplacez `YOUR_DEEPSEEK_API_KEY` dans le fichier `index.html` ligne ~3225 :

```javascript
const DEEPSEEK_API_KEY = 'sk-votre-cle-api-ici';
```

#### Option B : Configuration via Fichier Séparé (Recommandé)

1. Modifiez le fichier `chatbot-config.js` :
```javascript
DEEPSEEK_API_KEY: 'sk-votre-cle-api-ici',
```

2. Ajoutez le script dans votre `index.html` :
```html
<script src="chatbot-config.js"></script>
```

### 3. Paramètres Personnalisables

Dans `chatbot-config.js`, vous pouvez ajuster :

```javascript
// Paramètres de génération
MAX_TOKENS: 600,        // Longueur maximale des réponses
TEMPERATURE: 0.7,       // Créativité (0.0 = très focalisé, 1.0 = très créatif)
TOP_P: 0.9,            // Diversité des réponses

// Configuration de l'historique
MAX_HISTORY_LENGTH: 12, // Nombre de messages conservés
```

## 🎯 Fonctionnalités du Chatbot

### Réponses Intelligentes

Le chatbot peut maintenant :
- Donner des conseils de voyage personnalisés
- Suggérer des destinations et activités
- Répondre aux questions sur la culture et les coutumes
- Fournir des informations pratiques (météo, saisons, etc.)
- Maintenir le contexte de la conversation

### Intégration des Liens d'Affiliation

Le chatbot utilise TOUJOURS les liens Safarihoo :
- ✈️ Vols : `https://aviasales.tpm.li/LrJL8WFF`
- 🏨 Hôtels : `https://hotellook.tpm.li/b7olhaGZ`
- 🎯 Activités : `https://wegotrip.tpm.li/MiJxBGR8`
- 🚗 Location de voiture : `https://getrentacar.tpm.li/vioWZ86l`

### Exemples d'Utilisation

**Utilisateur** : "Je veux aller à Paris en mars, des conseils ?"

**Chatbot** : "Excellente idée ! Mars est un moment parfait pour visiter Paris - les températures sont agréables (8-15°C) et il y a moins de touristes qu'en été. Je recommande de visiter les jardins du Luxembourg qui commencent à fleurir, et de profiter des musées moins bondés.

Voici nos liens pour organiser votre voyage :
✈️ [Rechercher des vols vers Paris]
🏨 [Hôtels à Paris]
🎯 [Activités à Paris]

Avez-vous déjà une idée de la durée de votre séjour ?"

## 🔒 Sécurité et Performance

### Sécurité
- La clé API est stockée côté client (à sécuriser en production)
- Validation des réponses avant affichage
- Gestion d'erreurs robuste

### Performance
- Historique limité pour éviter les coûts
- Réponses rapides pour les questions simples
- Fallback en cas d'erreur API
- Cache des réponses fréquentes

## 🛠️ Dépannage

### Erreurs Courantes

1. **"Erreur API: 401"**
   - Vérifiez que votre clé API est correcte
   - Assurez-vous que votre compte DeepSeek est actif

2. **"Erreur API: 429"**
   - Vous avez dépassé la limite de requêtes
   - Attendez quelques minutes avant de réessayer

3. **Réponses statiques affichées**
   - L'API DeepSeek est temporairement indisponible
   - Le chatbot utilise le mode fallback

### Logs de Débogage

Ouvrez la console du navigateur (F12) pour voir :
- Les requêtes API
- Les erreurs éventuelles
- Les performances du chatbot

## 📈 Optimisations Futures

### Fonctionnalités à Ajouter

1. **Cache Local** : Stockage des réponses fréquentes
2. **Analyse de Sentiment** : Adaptation du ton selon l'utilisateur
3. **Multilingue** : Support d'autres langues
4. **Personnalisation** : Sauvegarde des préférences utilisateur
5. **Intégration Météo** : Informations météo en temps réel
6. **Recommandations IA** : Suggestions basées sur l'historique

### Améliorations Techniques

1. **API Backend** : Déplacer l'appel API côté serveur
2. **Base de Données** : Stockage des conversations
3. **Analytics** : Suivi des performances et utilisations
4. **A/B Testing** : Test de différents prompts

## 💡 Conseils d'Utilisation

### Pour les Utilisateurs
- Posez des questions spécifiques pour de meilleures réponses
- Utilisez le contexte de la conversation
- N'hésitez pas à demander des conseils détaillés

### Pour les Développeurs
- Testez régulièrement avec différents types de questions
- Surveillez les coûts de l'API DeepSeek
- Ajustez les paramètres selon vos besoins
- Maintenez les liens d'affiliation à jour

## 📞 Support

Pour toute question ou problème :
1. Vérifiez ce document
2. Consultez les logs de la console
3. Testez avec une nouvelle clé API
4. Contactez l'équipe Safarihoo

---

**Version** : 2.0  
**Dernière mise à jour** : Décembre 2024  
**Compatibilité** : Tous les navigateurs modernes 