// 数据定义
const bookData = {
    categories: ["家庭", "小说", "心理", "科技", "儿童"],
    region1: [1200, 2400, 1800, 2200, 1600],
    region2: [1050, 2100, 1300, 1600, 1340]
};

// 汇率数据（示例数据，基于Jupyter Notebook中的趋势）
const exchangeRateData = {
    days: Array.from({length: 31}, (_, i) => i + 1),
    rate2017: Array.from({length: 31}, (_, i) => 6.78 + Math.sin(i * 0.2) * 0.1),
    rate2019: Array.from({length: 31}, (_, i) => 6.88 + Math.sin(i * 0.25) * 0.08)
};

// 图表实例
let bookPurchaseChart = null;
let exchangeRateChart = null;

// DOM 加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeBookPurchaseChart();
    initializeExchangeRateChart();
    initializeDataTable();
    initializeFilters();
    initializeStatistics();
});

// 导航功能
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有活跃状态
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // 添加当前活跃状态
            this.classList.add('active');
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
}

// 图书采购图表初始化
function initializeBookPurchaseChart() {
    const ctx = document.getElementById('bookPurchaseChart').getContext('2d');
    
    bookPurchaseChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: bookData.categories,
            datasets: [
                {
                    label: '地区1',
                    data: bookData.region1,
                    backgroundColor: '#FFCC00',
                    borderColor: '#FF9900',
                    borderWidth: 2,
                    borderRadius: 5,
                    barPercentage: 0.6
                },
                {
                    label: '地区2',
                    data: bookData.region2,
                    backgroundColor: '#B0C4DE',
                    borderColor: '#87CEEB',
                    borderWidth: 2,
                    borderRadius: 5,
                    barPercentage: 0.6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: '地区图书采购情况对比',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            size: 12
                        },
                        padding: 20
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleFont: {
                        size: 12
                    },
                    bodyFont: {
                        size: 12
                    },
                    padding: 10
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '采购数量（本）',
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: '图书种类',
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeOutQuart'
            }
        }
    });
}

// 汇率走势图表初始化
function initializeExchangeRateChart() {
    const ctx = document.getElementById('exchangeRateChart').getContext('2d');
    
    exchangeRateChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: exchangeRateData.days.map(day => `7月${day}日`),
            datasets: [
                {
                    label: '2017年7月',
                    data: exchangeRateData.rate2017,
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 3,
                    pointHoverRadius: 6
                },
                {
                    label: '2019年7月',
                    data: exchangeRateData.rate2019,
                    borderColor: '#ff6b6b',
                    backgroundColor: 'rgba(255, 107, 107, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 3,
                    pointHoverRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: '美元/人民币汇率走势',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            size: 12
                        },
                        padding: 20
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleFont: {
                        size: 12
                    },
                    bodyFont: {
                        size: 12
                    },
                    padding: 10
                }
            },
            scales: {
                y: {
                    title: {
                        display: true,
                        text: '汇率',
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: '日期',
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'nearest'
            },
            animation: {
                duration: 1000,
                easing: 'easeOutQuart'
            }
        }
    });
}

// 数据表格初始化
function initializeDataTable() {
    const tableBody = document.getElementById('bookDataTable');
    
    bookData.categories.forEach((category, index) => {
        const row = document.createElement('tr');
        const region1Value = bookData.region1[index];
        const region2Value = bookData.region2[index];
        const total = region1Value + region2Value;
        
        row.innerHTML = `
            <td>${category}</td>
            <td>${region1Value.toLocaleString()}</td>
            <td>${region2Value.toLocaleString()}</td>
            <td>${total.toLocaleString()}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// 筛选器功能
function initializeFilters() {
    const region1Checkbox = document.getElementById('region1');
    const region2Checkbox = document.getElementById('region2');
    
    function updateChart() {
        if (bookPurchaseChart) {
            bookPurchaseChart.data.datasets[0].hidden = !region1Checkbox.checked;
            bookPurchaseChart.data.datasets[1].hidden = !region2Checkbox.checked;
            bookPurchaseChart.update();
        }
    }
    
    region1Checkbox.addEventListener('change', updateChart);
    region2Checkbox.addEventListener('change', updateChart);
}

// 统计信息初始化
function initializeStatistics() {
    // 计算汇率统计数据
    const stats2017 = calculateStats(exchangeRateData.rate2017);
    const stats2019 = calculateStats(exchangeRateData.rate2019);
    
    // 更新DOM元素
    document.getElementById('maxRate2017').textContent = stats2017.max.toFixed(4);
    document.getElementById('minRate2017').textContent = stats2017.min.toFixed(4);
    document.getElementById('avgRate2017').textContent = stats2017.avg.toFixed(4);
    
    document.getElementById('maxRate2019').textContent = stats2019.max.toFixed(4);
    document.getElementById('minRate2019').textContent = stats2019.min.toFixed(4);
    document.getElementById('avgRate2019').textContent = stats2019.avg.toFixed(4);
}

// 计算统计数据的辅助函数
function calculateStats(data) {
    return {
        max: Math.max(...data),
        min: Math.min(...data),
        avg: data.reduce((sum, val) => sum + val, 0) / data.length
    };
}

// 响应式图表调整
window.addEventListener('resize', function() {
    if (bookPurchaseChart) {
        bookPurchaseChart.resize();
    }
    if (exchangeRateChart) {
        exchangeRateChart.resize();
    }
});

// 导出数据功能
function exportBookData() {
    const csvContent = "data:text/csv;charset=utf-8,"
        + "图书种类,地区1采购量,地区2采购量,总计\n"
        + bookData.categories.map((category, index) => 
            `${category},${bookData.region1[index]},${bookData.region2[index]},${bookData.region1[index] + bookData.region2[index]}`
        ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "图书采购数据.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// 导出汇率数据功能
function exportExchangeRateData() {
    const csvContent = "data:text/csv;charset=utf-8,"
        + "日期,2017年汇率,2019年汇率\n"
        + exchangeRateData.days.map((day, index) => 
            `7月${day}日,${exchangeRateData.rate2017[index].toFixed(4)},${exchangeRateData.rate2019[index].toFixed(4)}`
        ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "汇率数据.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// 添加导出按钮到页面
function addExportButtons() {
    const bookSection = document.getElementById('book-purchase');
    const rateSection = document.getElementById('exchange-rate');
    
    // 图书数据导出按钮
    const bookExportBtn = document.createElement('button');
    bookExportBtn.textContent = '导出图书数据';
    bookExportBtn.className = 'export-btn';
    bookExportBtn.onclick = exportBookData;
    
    const bookControls = bookSection.querySelector('.data-controls');
    if (bookControls) {
        const exportContainer = document.createElement('div');
        exportContainer.style.textAlign = 'center';
        exportContainer.style.marginTop = '1rem';
        exportContainer.appendChild(bookExportBtn);
        bookControls.appendChild(exportContainer);
    }
    
    // 汇率数据导出按钮
    const rateExportBtn = document.createElement('button');
    rateExportBtn.textContent = '导出汇率数据';
    rateExportBtn.className = 'export-btn';
    rateExportBtn.onclick = exportExchangeRateData;
    
    const rateInfo = rateSection.querySelector('.rate-info');
    if (rateInfo) {
        const exportContainer = document.createElement('div');
        exportContainer.style.textAlign = 'center';
        exportContainer.style.marginTop = '1rem';
        exportContainer.appendChild(rateExportBtn);
        rateInfo.appendChild(exportContainer);
    }
}

// 在DOM加载完成后添加导出按钮
document.addEventListener('DOMContentLoaded', addExportButtons);

// 添加导出按钮样式
const exportStyle = document.createElement('style');
exportStyle.textContent = `
    .export-btn {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 25px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        transition: all 0.3s ease;
        margin-top: 1rem;
    }
    
    .export-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    }
`;
document.head.appendChild(exportStyle);