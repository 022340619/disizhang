// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeColorSystem();
    initializeBookPurchaseChart();
    initializeExchangeRateChart();
    initializeLineStylesChart();
    initializeInteractiveCharts();
    initializeEventListeners();
});

// 导航功能
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    // 平滑滚动
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // 更新导航激活状态
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // 滚动时更新导航激活状态
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
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

// 颜色系统初始化
function initializeColorSystem() {
    const basicColors = [
        '#FF0000', '#FFA500', '#FFFF00', '#008000', '#0000FF', 
        '#4B0082', '#EE82EE', '#FF69B4', '#FF4500', '#32CD32',
        '#00CED1', '#000080', '#FFD700', '#FF6347', '#9370DB'
    ];
    
    const colormapColors = [
        '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
        '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf',
        '#aec7e8', '#ffbb78', '#98df8a', '#ff9896', '#c5b0d5'
    ];
    
    const basicColorsContainer = document.getElementById('basic-colors');
    const colormapsContainer = document.getElementById('colormaps');
    
    // 创建基础颜色块
    basicColors.forEach(color => {
        const colorItem = document.createElement('div');
        colorItem.className = 'color-item';
        colorItem.style.backgroundColor = color;
        colorItem.textContent = color;
        colorItem.title = color;
        basicColorsContainer.appendChild(colorItem);
    });
    
    // 创建颜色映射表颜色块
    colormapColors.forEach(color => {
        const colorItem = document.createElement('div');
        colorItem.className = 'color-item';
        colorItem.style.backgroundColor = color;
        colorItem.textContent = color;
        colorItem.title = color;
        colormapsContainer.appendChild(colorItem);
    });
}

// 图书采购数据图表
function initializeBookPurchaseChart() {
    const ctx = document.getElementById('bookChart').getContext('2d');
    
    const bookData = {
        labels: ['家庭', '小说', '心理', '科技', '儿童'],
        datasets: [{
            label: '地区1',
            data: [1200, 2400, 1800, 2200, 1600],
            backgroundColor: '#FFCC00',
            borderColor: '#FFCC00',
            borderWidth: 2
        }, {
            label: '地区2',
            data: [1050, 2100, 1300, 1600, 1340],
            backgroundColor: '#B0C4DE',
            borderColor: '#B0C4DE',
            borderWidth: 2
        }]
    };
    
    window.bookChart = new Chart(ctx, {
        type: 'bar',
        data: bookData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
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

// 汇率走势图表
function initializeExchangeRateChart() {
    const ctx = document.getElementById('exchangeChart').getContext('2d');
    
    const exchangeData = {
        labels: ['1', '5', '10', '15', '20', '25', '30'],
        datasets: [{
            label: '2017年7月',
            data: [6.78, 6.79, 6.81, 6.75, 6.73, 6.76, 6.74],
            borderColor: '#e74c3c',
            backgroundColor: 'rgba(231, 76, 60, 0.1)',
            borderWidth: 3,
            tension: 0.4
        }, {
            label: '2019年7月',
            data: [6.87, 6.85, 6.83, 6.88, 6.90, 6.86, 6.89],
            borderColor: '#3498db',
            backgroundColor: 'rgba(52, 152, 219, 0.1)',
            borderWidth: 3,
            tension: 0.4
        }]
    };
    
    window.exchangeChart = new Chart(ctx, {
        type: 'line',
        data: exchangeData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: '汇率 (人民币/美元)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: '日期 (日)'
                    }
                }
            }
        }
    });
}

// 线型样式图表
function initializeLineStylesChart() {
    const ctx = document.getElementById('lineStylesChart').getContext('2d');
    
    const lineStylesData = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [{
            label: '实线',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: '#e74c3c',
            borderWidth: 2,
            borderDash: []
        }, {
            label: '虚线',
            data: [5, 10, 15, 8, 12, 6],
            borderColor: '#3498db',
            borderWidth: 2,
            borderDash: [5, 5]
        }, {
            label: '点划线',
            data: [8, 5, 12, 6, 15, 9],
            borderColor: '#2ecc71',
            borderWidth: 2,
            borderDash: [2, 8]
        }]
    };
    
    window.lineStylesChart = new Chart(ctx, {
        type: 'line',
        data: lineStylesData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });
}

// 交互式图表初始化
function initializeInteractiveCharts() {
    initializeDynamicBarChart();
    initializePieChart();
}

// 动态柱状图
function initializeDynamicBarChart() {
    const ctx = document.getElementById('dynamicBarChart').getContext('2d');
    
    function generateData(points) {
        const data = [];
        for (let i = 0; i < points; i++) {
            data.push(Math.floor(Math.random() * 100) + 20);
        }
        return data;
    }
    
    function generateLabels(points) {
        const labels = [];
        for (let i = 1; i <= points; i++) {
            labels.push(`数据${i}`);
        }
        return labels;
    }
    
    const initialData = {
        labels: generateLabels(5),
        datasets: [{
            label: '动态数据',
            data: generateData(5),
            backgroundColor: [
                '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
                '#FF9F40', '#FF6384', '#C9CBCF', '#4BC0C0', '#FF6384'
            ],
            borderWidth: 1
        }]
    };
    
    window.dynamicBarChart = new Chart(ctx, {
        type: 'bar',
        data: initialData,
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
    
    // 滑块事件监听
    const slider = document.getElementById('dataPoints');
    const pointCount = document.getElementById('pointCount');
    
    slider.addEventListener('input', function() {
        const points = parseInt(this.value);
        pointCount.textContent = points;
        
        window.dynamicBarChart.data.labels = generateLabels(points);
        window.dynamicBarChart.data.datasets[0].data = generateData(points);
        window.dynamicBarChart.update();
    });
}

// 响应式饼图
function initializePieChart() {
    const ctx = document.getElementById('pieChart').getContext('2d');
    
    function generateRandomData() {
        return {
            labels: ['类别A', '类别B', '类别C', '类别D', '类别E'],
            datasets: [{
                data: [
                    Math.floor(Math.random() * 100) + 10,
                    Math.floor(Math.random() * 100) + 10,
                    Math.floor(Math.random() * 100) + 10,
                    Math.floor(Math.random() * 100) + 10,
                    Math.floor(Math.random() * 100) + 10
                ],
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'
                ],
                borderWidth: 2
            }]
        };
    }
    
    window.pieChart = new Chart(ctx, {
        type: 'pie',
        data: generateRandomData(),
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
    
    // 随机数据按钮事件
    document.getElementById('randomizeData').addEventListener('click', function() {
        window.pieChart.data = generateRandomData();
        window.pieChart.update();
    });
}

// 事件监听器初始化
function initializeEventListeners() {
    // 图书采购图表控制
    document.getElementById('toggleRegion1').addEventListener('click', function() {
        const dataset = window.bookChart.data.datasets[0];
        dataset.hidden = !dataset.hidden;
        window.bookChart.update();
    });
    
    document.getElementById('toggleRegion2').addEventListener('click', function() {
        const dataset = window.bookChart.data.datasets[1];
        dataset.hidden = !dataset.hidden;
        window.bookChart.update();
    });
    
    document.getElementById('changeChartType').addEventListener('click', function() {
        const currentType = window.bookChart.config.type;
        window.bookChart.config.type = currentType === 'bar' ? 'line' : 'bar';
        window.bookChart.update();
    });
    
    // 汇率走势图表控制
    document.getElementById('show2017').addEventListener('change', function() {
        window.exchangeChart.data.datasets[0].hidden = !this.checked;
        window.exchangeChart.update();
    });
    
    document.getElementById('show2019').addEventListener('change', function() {
        window.exchangeChart.data.datasets[1].hidden = !this.checked;
        window.exchangeChart.update();
    });
    
    document.getElementById('downloadData').addEventListener('click', function() {
        const data = {
            labels: window.exchangeChart.data.labels,
            datasets: window.exchangeChart.data.datasets.map(dataset => ({
                label: dataset.label,
                data: dataset.data
            }))
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = '汇率数据.json';
        a.click();
        URL.revokeObjectURL(url);
    });
}

// 工具函数：生成随机颜色
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 工具函数：格式化数字
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 响应式图表调整
window.addEventListener('resize', function() {
    // 重新调整图表大小
    if (window.bookChart) window.bookChart.resize();
    if (window.exchangeChart) window.exchangeChart.resize();
    if (window.lineStylesChart) window.lineStylesChart.resize();
    if (window.dynamicBarChart) window.dynamicBarChart.resize();
    if (window.pieChart) window.pieChart.resize();
});