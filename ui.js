// UI மேலாண்மை மற்றும் திரை மாற்றங்கள்
function renderDashboard() {
    const mainScreen = document.getElementById('mainScreen');
    mainScreen.innerHTML = `
        <div class="dashboard-box">
            <h2>SAHAYARAJ-2026 Dashboard</h2>
            <div id="dataDisplay">டேட்டா லோடு ஆகிறது...</div>
        </div>
        
        <div class="settings-panel">
            <h3>Google Sheets Setup</h3>
            <textarea id="scriptBox" readonly>/* இங்கே உங்கள் கூகுள் சீட் ஸ்கிரிப்ட் இருக்கும் */</textarea>
            <button onclick="copyScript()">ஸ்கிரிப்ட் காப்பி செய்யவும்</button>
            
            <input type="text" id="urlInput" placeholder="இந்த இடத்தில் உங்களது கூகுள் சீட்டின் URL-ஐ பேஸ்ட் செய்யவும்">
            <button onclick="saveUrl()">URL சேமிக்கவும்</button>
        </div>
    `;
}

function copyScript() {
    const scriptBox = document.getElementById('scriptBox');
    scriptBox.select();
    document.execCommand('copy');
    alert("ஸ்கிரிப்ட் காப்பி செய்யப்பட்டது!");
}

function saveUrl() {
    const url = document.getElementById('urlInput').value;
    if(url) {
        setSheetUrl(url);
        alert("URL சேமிக்கப்பட்டது!");
    } else {
        alert("தயவுசெய்து URL-ஐ உள்ளிடவும்.");
    }
}

// ஆப் லோட் ஆகும் போது திரையை உருவாக்க
window.onload = () => {
    renderDashboard();
    fetchDataFromSheet(); // லாஜிக்கிலிருந்து டேட்டாவை எடுக்கிறது
};
