// கூகுள் சீட்டுடன் தொடர்பு கொள்ளும் கோப்பு
async function fetchDataFromSheet() {
    const sheetUrl = CONFIG.googleSheetUrl;
    if (!sheetUrl) {
        document.getElementById('ledLight').classList.remove('connected');
        return;
    }

    try {
        const response = await fetch(sheetUrl);
        const data = await response.json();
        
        // G-LED இண்டிகேட்டரை பச்சை நிறமாக மாற்றவும்
        document.getElementById('ledLight').classList.add('connected');
        
        // ஆட்டோ-ஃபில்டரிங்: தற்போதைய மாத டேட்டாவை மட்டும் பிரித்தெடுத்தல்
        return filterCurrentMonthData(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById('ledLight').classList.remove('connected');
    }
}

function filterCurrentMonthData(allData) {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    // டேட்டாவில் உள்ள தேதியுடன் ஒப்பிட்டு தற்போதைய மாதத்தை மட்டும் எடுக்கும்
    return allData.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate.getMonth() === currentMonth && 
               itemDate.getFullYear() === currentYear;
    });
}

// டேட்டாவை சேமிக்கும் போது சுழலும் அனிமேஷன் (G LED)
async function saveToSheet(data) {
    const led = document.getElementById('ledLight');
    led.classList.add('loading');
    
    // கூகுள் சீட்டுக்கு டேட்டாவை அனுப்பும் லாஜிக் இங்கே வரும்
    // ...
    
    led.classList.remove('loading');
}
