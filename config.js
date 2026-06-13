// ஆப்பின் அடிப்படை அமைப்புகள் மற்றும் கூகுள் சீட் இணைப்பு
const CONFIG = {
    // இங்கே உங்கள் கூகுள் சீட் URL-ஐ பேஸ்ட் செய்ய வேண்டும்
    googleSheetUrl: "", 
    
    // பயனர் செட்டிங்ஸில் மாற்றக்கூடியவை
    appTitle: "SAHAYARAJ-2026",
    ledModel: "model1", // 1 முதல் 20 வரை நீங்கள் தேர்வு செய்யலாம்
    
    // லோக்கல் ஸ்டோரேஜ்க்குப் பதில் செட்டிங்ஸை சேமிக்கும் முறை
    loadSettings: function() {
        const saved = localStorage.getItem("saha_app_settings");
        return saved ? JSON.parse(saved) : { 
            title: "SAHAYARAJ-2026", 
            theme: "#ffd700",
            ledModel: "model1" 
        };
    }
};

// கூகுள் சீட் URL-ஐ அப்டேட் செய்யும் ஃபங்க்ஷன்
function setSheetUrl(url) {
    CONFIG.googleSheetUrl = url;
    console.log("Sheet URL Updated: ", url);
    // இங்கிருந்து கூகுள் சீட்டுடன் கனெக்ட் செய்ய logic.js அழைக்கும்
}

// ஆப் தொடங்கும் போது அமைப்புகளை லோடு செய்ய
let appSettings = CONFIG.loadSettings();
