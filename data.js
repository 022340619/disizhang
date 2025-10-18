// 示例数据 - 基于第2章数据可视化内容
window.chartData = {
    sales: {
        title: '月度销售数据',
        labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        datasets: [
            {
                label: '销售额（万元）',
                data: [120, 150, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360]
            },
            {
                label: '利润（万元）',
                data: [30, 40, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95]
            }
        ]
    },
    
    users: {
        title: '用户增长数据',
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
            {
                label: '新用户数',
                data: [1000, 1500, 2000, 2500]
            },
            {
                label: '活跃用户数',
                data: [8000, 8500, 9000, 9500]
            },
            {
                label: '总用户数',
                data: [10000, 11500, 13000, 14500]
            }
        ]
    },
    
    products: {
        title: '产品销量分布',
        labels: ['产品A', '产品B', '产品C', '产品D', '产品E'],
        datasets: [
            {
                label: '销量（件）',
                data: [1500, 2200, 1800, 3000, 2500]
            },
            {
                label: '库存（件）',
                data: [500, 800, 600, 1000, 900]
            }
        ]
    },
    
    custom: {
        title: '自定义数据',
        labels: ['数据点1', '数据点2', '数据点3', '数据点4', '数据点5'],
        datasets: [
            {
                label: '自定义数据集1',
                data: [10, 20, 30, 40, 50]
            },
            {
                label: '自定义数据集2',
                data: [15, 25, 35, 45, 55]
            }
        ]
    }
};

// 第2章中提到的示例数据
window.chapter2Examples = {
    // 基本折线图数据
    basicLine: {
        title: '基本折线图示例',
        labels: ['点1', '点2', '点3', '点4', '点5'],
        datasets: [{
            label: '数据集1',
            data: [1, 4, 2, 6, 3]
        }]
    },
    
    // 多系列折线图
    multiLine: {
        title: '多系列折线图',
        labels: ['1月', '2月', '3月', '4月'],
        datasets: [
            {
                label: '系列A',
                data: [10, 20, 15, 25]
            },
            {
                label: '系列B',
                data: [5, 15, 10, 20]
            },
            {
                label: '系列C',
                data: [8, 12, 18, 22]
            }
        ]
    },
    
    // 柱状图数据
    barChart: {
        title: '柱状图示例',
        labels: ['类别A', '类别B', '类别C', '类别D'],
        datasets: [{
            label: '数值',
            data: [30, 45, 25, 60]
        }]
    },
    
    // 饼图数据
    pieChart: {
        title: '饼图示例 - 市场份额',
        labels: ['产品A', '产品B', '产品C', '产品D'],
        datasets: [{
            data: [35, 25, 20, 20]
        }]
    }
};

// 数据操作工具函数
window.dataUtils = {
    // 生成随机数据
    generateRandomData: (points = 12, min = 0, max = 100) => {
        return Array.from({length: points}, () => 
            Math.floor(Math.random() * (max - min + 1)) + min
        );
    },
    
    // 数据标准化
    normalizeData: (data) => {
        const max = Math.max(...data);
        return data.map(value => value / max);
    },
    
    // 计算移动平均
    movingAverage: (data, windowSize = 3) => {
        return data.map((_, index) => {
            const start = Math.max(0, index - Math.floor(windowSize / 2));
            const end = Math.min(data.length, index + Math.ceil(windowSize / 2));
            const window = data.slice(start, end);
            return window.reduce((sum, val) => sum + val, 0) / window.length;
        });
    },
    
    // 数据过滤
    filterData: (data, condition) => {
        return data.filter(condition);
    },
    
    // 数据排序
    sortData: (data, ascending = true) => {
        return [...data].sort((a, b) => ascending ? a - b : b - a);
    }
};

// 添加一些预设的数据转换示例
window.dataTransformations = {
    // 对数转换
    logTransform: (data) => data.map(val => Math.log(val + 1)),
    
    // 指数转换
    expTransform: (data) => data.map(val => Math.exp(val)),
    
    // 标准化到0-1范围
    minMaxScale: (data) => {
        const min = Math.min(...data);
        const max = Math.max(...data);
        return data.map(val => (val - min) / (max - min));
    },
    
    // Z-score标准化
    zScore: (data) => {
        const mean = data.reduce((sum, val) => sum + val, 0) / data.length;
        const std = Math.sqrt(data.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / data.length);
        return data.map(val => (val - mean) / std);
    }
};