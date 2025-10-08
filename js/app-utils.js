function resetToDefaults() {
    if (!confirm('Are you sure you want to reset all guests, tables, and interaction scores to default values?')) {
        return;
    }
    
    peopleCount = 1;
    tablesCount = 1;
    people = ['Guest 1'];
    peopleIcons = ['🐶'];
    tables = [{ chairs: 1 }];
    
    document.getElementById('peopleCount').value = 1;
    document.getElementById('tablesCount').value = 1;
    document.getElementById('totalChairsCount').value = 1;
    
    localStorage.removeItem('interactionScores');
    
    updatePeopleDisplay();
    updateMatrix();
    updateTablesDisplay();
    updateTotalChairsDisplay();
    
    console.log('Reset to default state completed! 🔄');
}

document.addEventListener('DOMContentLoaded', function() {
    updatePeopleDisplay();
    updateMatrix();
    updateTablesDisplay();
    updateTotalChairsDisplay();
});
