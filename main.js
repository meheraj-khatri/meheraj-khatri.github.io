// 1. Dynamic System Uptime
const startDate = new Date('2025-08-25');
const today = new Date();
const diffTime = Math.abs(today - startDate);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
document.getElementById('uptime-counter').innerText = diffDays;

// 2. Contribution Heatmap Generation
const heatmap = document.getElementById('heatmap');
if (heatmap) {
    for (let i = 0; i < 140; i++) {
        const sq = document.createElement('div');
        sq.className = 'square';
        const intensity = Math.random();
        if (intensity > 0.8) sq.classList.add('sq-high');
        else if (intensity > 0.5) sq.style.backgroundColor = '#a9bcd0';
        else if (intensity > 0.3) sq.style.backgroundColor = '#dce4ee';
        heatmap.appendChild(sq);
    }
}

// 3. Tech Radar (Skill Distribution)
const canvas = document.getElementById('techRadar');
if (canvas) {
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['C++', 'Python', 'SQL', 'OS Logic', 'Data Viz', 'Linux'],
            datasets: [{
                label: 'Proficiency',
                data: [9, 8.5, 7.5, 9, 7.5, 8],
                backgroundColor: 'rgba(0, 102, 204, 0.1)',
                borderColor: '#0066cc',
                pointBackgroundColor: '#0066cc',
                borderWidth: 2
            }]
        },
        options: {
            plugins: { legend: { display: false } },
            scales: {
                r: {
                    min: 0, max: 10, beginAtZero: true,
                    ticks: { display: false },
                    grid: { color: 'rgba(0,0,0,0.05)' }
                }
            }
        }
    });
}