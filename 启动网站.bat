@echo off
chcp 65001 >nul
echo 正在启动数据可视化网站...
echo.

REM 检查Python是否安装
python --version >nul 2>&1
if errorlevel 1 (
    echo 错误: 未找到Python，请先安装Python
    echo 或者直接打开 index.html 文件
    pause
    exit /b 1
)

echo Python已安装，启动服务器...
echo 网站将在浏览器中自动打开
echo 如果浏览器未自动打开，请手动访问: http://localhost:8080
echo.
echo 按 Ctrl+C 停止服务器
echo.

REM 启动Python服务器
python server.py

pause