// 定义图表数据
const bookData = {
    labels: ['家庭', '小说', '心理', '科技', '儿童'],
    region1: [1200, 2400, 1800, 2200, 1600],
    region2: [1050, 2100, 1300, 1600, 1340]
};

const exchangeData = {
    months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    2017: [6.95, 6.87, 6.90, 6.89, 6.85, 6.78, 6.75, 6.67, 6.59, 6.63, 6.61, 6.53],
    2019: [6.85, 6.72, 6.71, 6.73, 6.90, 6.87, 6.88, 7.09, 7.15, 7.08, 7.03, 6.98]
};

// Matplotlib 颜色系统
const matplotlibColors = {
    basic: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'],
    colormaps: ['viridis', 'plasma', 'inferno', 'magma', 'cividis', 'coolwarm', 'RdYlBu', 'Spectral', 'Set1', 'Set2', 'Set3', 'tab10', 'tab20']
};

// 全局变量
let bookChart, exchangeChart, lineStyleChart, dynamicBarChart, interactivePieChart;

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', function() {
    initializeColorDisplay();
    initializeBookChart();
    initializeExchangeChart();
    initializeLineStyleChart();
    initializeDynamicBarChart();
    initializeInteractivePieChart();
    setupNavigation();
});

// 初始化颜色展示
function initializeColorDisplay() {
    const basicColorsContainer = document.getElementById('basic-colors');
    const colormapContainer = document.getElementById('colormap');
    
    // 显示基础颜色
    matplotlibColors.basic.forEach(color => {
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color;
        colorBox.textContent = color;
        basicColorsContainer.appendChild(colorBox);
    });
    
    // 显示颜色映射表
    matplotlibColors.colormaps.forEach(colormap => {
        const colormapItem = document.createElement('div');
        colormapItem.className = 'colormap-item';
        
        const colormapBar = document.createElement('div');
        colormapBar.className = 'colormap-bar';
        colormapBar.style.background = `linear-gradient(90deg, #000, #fff)`;
        
        const colormapName = document.createElement('div');
        colormapName.textContent = colormap;
        
        colormapItem.appendChild(colormapBar);
        colormapItem.appendChild(colormapName);
        colormapContainer.appendChild(colormapItem);
    });
}

// 初始化图书采购图表
function initializeBookChart() {
    const ctx = document.getElementById('bookPurchaseChart').getContext('2d');
    
    bookChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: bookData.labels,
            datasets: [{
                label: '地区1',
                data: bookData.region1,
                backgroundColor: '#FFCC00',
                borderColor: '#FFCC00',
                borderWidth: 1
            }, {
                label: '地区2',
                data: bookData.region2,
                backgroundColor: '#B0C4DE',
                borderColor: '#B0C4DE',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: '地区1和地区2对各类图书的采购情况',
                    font: { size: 16 }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '采购数量(本)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: '图书种类'
                    }
                }
            }
        }
    });
}

// 初始化汇率图表
function initializeExchangeChart() {
    const ctx = document.getElementById('exchangeRateChart').getContext('2d');
    
    exchangeChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: exchangeData.months,
            datasets: [{
                label: '2017年',
                data: exchangeData[2017],
                borderColor: '#1f77b4',
                backgroundColor: 'rgba(31, 119, 180, 0.1)',
                borderWidth: 2,
                tension: 0.3,
                fill: true
            }, {
                label: '2019年',
                data: exchangeData[2019],
                borderColor: '#ff7f0e',
                backgroundColor: 'rgba(255, 127, 14, 0.1)',
                borderWidth: 2,
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: '美元/人民币汇率走势',
                    font: { size: 16 }
                }
            },
            scales: {
                y: {
                    title: {
                        display: true,
                        text: '汇率'
                    }
                }
            }
        }
    });
}

// 初始化线型样式图表
function initializeLineStyleChart() {
    const ctx = document.getElementById('lineStyleChart').getContext('2d');
    
    lineStyleChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['A', 'B', 'C', 'D', 'E', 'F'],
            datasets: [{
                label: '实线',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: '#1f77b4',
                borderWidth: 2,
                borderDash: []
            }, {
                label: '虚线',
                data: [8, 12, 6, 8, 5, 7],
                borderColor: '#ff7f0e',
                borderWidth: 2,
                borderDash: [5, 5]
            }, {
                label: '点线',
                data: [15, 8, 12, 4, 8, 10],
                borderColor: '#2ca02c',
                borderWidth: 2,
                borderDash: [2, 2]
            }, {
                label: '点划线',
                data: [5, 15, 8, 12, 6, 4],
                borderColor: '#d62728',
                borderWidth: 2,
                borderDash: [10, 5, 2, 5]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Matplotlib 线型样式展示',
                    font: { size: 16 }
                }
            }
        }
    });
}

// 初始化动态柱状图
function initializeDynamicBarChart() {
    const ctx = document.getElementById('dynamicBarChart').getContext('2d');
    
    dynamicBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['数据1', '数据2', '数据3', '数据4', '数据5'],
            datasets: [{
                label: '动态数据',
                data: generateRandomData(5),
                backgroundColor: matplotlibColors.basic.slice(0, 5),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// 初始化交互式饼图
function initializeInteractivePieChart() {
    const ctx = document.getElementById('interactivePieChart').getContext('2d');
    
    interactivePieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['类别A', '类别B', '类别C', '类别D', '类别E'],
            datasets: [{
                data: [30, 25, 20, 15, 10],
                backgroundColor: matplotlibColors.basic.slice(0, 5),
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right'
                }
            }
        }
    });
}

// 生成随机数据
function generateRandomData(count) {
    return Array.from({length: count}, () => Math.floor(Math.random() * 100) + 1);
}

// 图表控制函数
function toggleRegions() {
    const datasets = bookChart.data.datasets;
    datasets.forEach(dataset => {
        dataset.hidden = !dataset.hidden;
    });
    bookChart.update();
}

function changeChartType() {
    const newType = bookChart.config.type === 'bar' ? 'line' : 'bar';
    bookChart.config.type = newType;
    bookChart.update();
}

function resetChart() {
    bookChart.destroy();
    initializeBookChart();
}

function updateExchangeChart() {
    const yearSelect = document.getElementById('yearSelect');
    const selectedYear = yearSelect.value;
    
    const datasets = exchangeChart.data.datasets;
    
    if (selectedYear === 'both') {
        datasets[0].hidden = false;
        datasets[1].hidden = false;
    } else if (selectedYear === '2017') {
        datasets[0].hidden = false;
        datasets[1].hidden = true;
    } else if (selectedYear === '2019') {
        datasets[0].hidden = true;
        datasets[1].hidden = false;
    }
    
    exchangeChart.update();
}

function updateDynamicChart() {
    const barCountInput = document.getElementById('barCount');
    const barCountValue = document.getElementById('barCountValue');
    const count = parseInt(barCountInput.value);
    
    barCountValue.textContent = count;
    
    const newLabels = Array.from({length: count}, (_, i) => `数据${i + 1}`);
    const newData = generateRandomData(count);
    
    dynamicBarChart.data.labels = newLabels;
    dynamicBarChart.data.datasets[0].data = newData;
    dynamicBarChart.data.datasets[0].backgroundColor = matplotlibColors.basic.slice(0, count);
    
    dynamicBarChart.update();
}

function randomizePieData() {
    const newData = generateRandomData(5);
    interactivePieChart.data.datasets[0].data = newData;
    interactivePieChart.update();
}

function animatePieChart() {
    interactivePieChart.options.animation = {
        animateRotate: true,
        animateScale: true
    };
    interactivePieChart.update();
}

// 下载数据功能
function downloadData() {
    const csvContent = "data:text/csv;charset=utf-8," 
        + "月份,2017年汇率,2019年汇率\n" 
        + exchangeData.months.map((month, i) => 
            `${month},${exchangeData[2017][i]},${exchangeData[2019][i]}`
        ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "汇率数据.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// 设置导航
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.chart-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // 移除所有活跃状态
            navLinks.forEach(l => l.classList.remove('active'));
            
            // 添加当前活跃状态
            link.classList.add('active');
            
            // 滚动到对应区域
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // 添加滚动监听，自动更新导航状态
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// 添加工具提示功能
function addTooltips() {
    const charts = [bookChart, exchangeChart, lineStyleChart, dynamicBarChart, interactivePieChart];
    
    charts.forEach(chart => {
        if (chart) {
            chart.canvas.addEventListener('mousemove', (e) => {
                const points = chart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false);
                if (points.length) {
                    const point = points[0];
                    const dataset = chart.data.datasets[point.datasetIndex];
                    const value = dataset.data[point.index];
                    const label = chart.data.labels[point.index];
                    
                    // 创建工具提示
                    showTooltip(e, `${label}: ${value}`);
                }
            });
            
            chart.canvas.addEventListener('mouseout', () => {
                hideTooltip();
            });
        }
    });
}

function showTooltip(event, text) {
    let tooltip = document.querySelector('.tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        document.body.appendChild(tooltip);
    }
    
    tooltip.textContent = text;
    tooltip.style.left = (event.pageX + 10) + 'px';
    tooltip.style.top = (event.pageY + 10) + 'px';
    tooltip.style.display = 'block';
}

function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.style.display = 'none';
    }
}

// 初始化工具提示
setTimeout(addTooltips, 1000);