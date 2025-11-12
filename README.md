# Simple Modal App

Yksinkertainen React Native Modal-harjoitus Expo:lla.

## ✨ Ominaisuudet

- **Yksinkertainen rakenne**: Kaikki koodi yhdessä App.js-tiedostossa
- **Pressable-nappi**: "Show modal message" -nappi
- **Modal-komponentti**: Liukuu ylös ruudun alaosasta
- **Sulkemistoiminnot**: Close-nappi ja Android takaisin-nappi
- **Moderni tyyli**: Pyöristetyt kulmat, varjot ja animaatiot

## 📱 Käyttö

1. **Käynnistä sovellus**: `npm start`
2. **Paina nappia**: "Show modal message"
3. **Modal aukeaa**: Näyttää "This is modal..." -tekstin
4. **Sulje modal**: Paina "Close" tai Android takaisin-nappi

## 🏗️ Kansiorakenne

```
SimpleModalApp/
├── App.js          # 🎯 Kaikki koodi tässä
├── package.json    # Riippuvuudet
├── app.json        # Expo konfiguraatio
└── assets/         # Kuvat ja ikonit
```

## 🎨 Tyylit

- **Päänappi**: Sininen (#007AFF) varjolla
- **Modal**: Valkoinen pyöristetty laatikko
- **Overlay**: Läpinäkyvä tumma tausta (50% opacity)
- **Close-nappi**: Punainen (#FF3B30)
- **Fontti**: Selkeä ja moderni

## 🔧 Tekniset yksityiskohdat

### Modal-komponentti:
```javascript
<Modal
  animationType="slide"     // Liukuu ylös
  transparent={true}        // Läpinäkyvä tausta
  visible={modalVisible}    // Ohjataan state:lla
  onRequestClose={...}      // Android takaisin-nappi
>
```

### Pressable-komponentti:
```javascript
<Pressable
  style={styles.pressableButton}
  onPress={() => setModalVisible(true)}
>
```

## 🚀 Edut yksinkertaisesta rakenteesta

✅ **Helppo ymmärtää** - kaikki koodi yhdessä paikassa  
✅ **Nopea kehitys** - ei monimutkaista navigaatiota  
✅ **Vähän tiedostoja** - ei turhia kansioita  
✅ **Selkeä logiikka** - suoraviivainen state-hallinta  
✅ **Opetusystävällinen** - hyvä aloittelijoille  

## 📖 Oppimiskohteet

- React useState hook
- Modal-komponentti React Native:ssä
- Pressable vs TouchableOpacity
- StyleSheet ja tyylittely
- Cross-platform considerations (Android back button)
- SafeAreaView käyttö
- State management basics