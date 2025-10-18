class DataVisualization {
    constructor() {
        this.chart = null;
        this.currentData = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadInitialData();
    }

    setupEventListeners() {
        document.getElementById('generateBtn').addEventListener('click', () => {
            this.generateChart();
        });

        document.getElementById('exportBtn').addEventListener('click', () => {
            this.exportChart();
        });

        document.getElementById('loadCustomData').addEventListener('click', () => {
            this.loadCustomData();
        });

        // 实时预览
        document.getElementById('chartType').addEventListener('change', () => {
            this.generateChart();
        });

        document.getElementById('dataset').addEventListener('change', () => {
            this.loadData();
            this.generateChart();
        });
    }

    loadInitialData() {
        this.loadData();
        this.generateChart();
        this.updateDataTable();
    }

    loadData() {
        const dataset = document.getElementById('dataset').value;
        this.currentData = window.chartData[dataset];
        this.updateDataTable();
    }

    loadCustomData() {
        const customDataText = document.getElementById('customData').value;
        try {
            const customData = JSON.parse(customDataText);
            this.currentData = customData;
            this.updateDataTable();
            this.generateChart();
        } catch (error) {
            alert('数据格式错误，请检查JSON格式');
        }
    }

    generateChart() {
        const chartType = document.getElementById('chartType').value;
        
        if (this.chart) {
            this.chart.destroy();
        }

        const ctx = document.getElementById('myChart').getContext('2d');
        
        const config = this.getChartConfig(chartType);
        this.chart = new Chart(ctx, config);
    }

    getChartConfig(type) {
        const data = this.currentData;
        
        const baseConfig = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: data.title
                }
            }
        };

        switch (type) {
            case 'line':
                return {
                    ...baseConfig,
                    type: 'line',
                    data: {
                        labels: data.labels,
                        datasets: data.datasets.map(dataset => ({
                            ...dataset,
                            borderColor: this.getRandomColor(),
                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                            tension: 0.4,
                            fill: true
                        }))
                    },
                    options: {
                        ...baseConfig,
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                };

            case 'bar':
                return {
                    ...baseConfig,
                    type: 'bar',
                    data: {
                        labels: data.labels,
                        datasets: data.datasets.map(dataset => ({
                            ...dataset,
                            backgroundColor: this.getRandomColors(data.labels.length),
                            borderColor: this.getRandomColors(data.labels.length),
                            borderWidth: 1
                        }))
                    },
                    options: {
                        ...baseConfig,
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                };

            case 'pie':
                return {
                    ...baseConfig,
                    type: 'pie',
                    data: {
                        labels: data.labels,
                        datasets: [{
                            data: data.datasets[0].data,
                            backgroundColor: this.getRandomColors(data.labels.length),
                            borderColor: '#fff',
                            borderWidth: 2
                        }]
                    }
                };

            case 'scatter':
                return {
                    ...baseConfig,
                    type: 'scatter',
                    data: {
                        datasets: data.datasets.map((dataset, index) => ({
                            label: dataset.label,
                            data: dataset.data.map((value, i) => ({
                                x: i,
                                y: value
                            })),
                            backgroundColor: this.getRandomColor(),
                            pointRadius: 6
                        }))
                    },
                    options: {
                        ...baseConfig,
                        scales: {
                            x: {
                                type: 'linear',
                                position: 'bottom'
                            }
                        }
                    }
                };

            case 'radar':
                return {
                    ...baseConfig,
                    type: 'radar',
                    data: {
                        labels: data.labels,
                        datasets: data.datasets.map(dataset => ({
                            ...dataset,
                            backgroundColor: this.getRandomColor(0.2),
                            borderColor: this.getRandomColor(),
                            pointBackgroundColor: this.getRandomColor(),
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: this.getRandomColor()
                        }))
                    },
                    options: {
                        ...baseConfig,
                        scales: {
                            r: {
                                angleLines: {
                                    display: true
                                },
                                suggestedMin: 0
                            }
                        }
                    }
                };
        }
    }

    updateDataTable() {
        const tableBody = document.getElementById('tableBody');
        const data = this.currentData;
        
        tableBody.innerHTML = '';
        
        data.labels.forEach((label, index) => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${label}</td>
                <td>${data.datasets[0].data[index] || ''}</td>
                <td>${data.datasets[1] ? data.datasets[1].data[index] || '' : ''}</td>
                <td>${this.calculateGrowthRate(data.datasets[0].data, index)}</td>
            `;
            
            tableBody.appendChild(row);
        });
    }

    calculateGrowthRate(data, index) {
        if (index === 0) return '-';
        const current = data[index];
        const previous = data[index - 1];
        const growth = ((current - previous) / previous * 100).toFixed(2);
        return `${growth}%`;
    }

    exportChart() {
        if (this.chart) {
            const link = document.createElement('a');
            link.download = `chart-${new Date().getTime()}.png`;
            link.href = this.chart.toBase64Image();
            link.click();
        }
    }

    getRandomColor(alpha = 1) {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    getRandomColors(count) {
        return Array.from({length: count}, () => this.getRandomColor());
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    new DataVisualization();
});

// 添加一些实用函数
window.chartUtils = {
    formatNumber: (num) => {
        return new Intl.NumberFormat().format(num);
    },
    
    formatCurrency: (num) => {
        return new Intl.NumberFormat('zh-CN', {
            style: 'currency',
            currency: 'CNY'
        }).format(num);
    },
    
    formatPercentage: (num) => {
        return new Intl.NumberFormat('zh-CN', {
            style: 'percent',
            minimumFractionDigits: 2
        }).format(num);
    }
};