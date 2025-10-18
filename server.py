import http.server
import socketserver
import webbrowser
import os
import json
from datetime import datetime

class DataVisualizationHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # 处理API请求
        if self.path.startswith('/api/'):
            self.handle_api_request()
        else:
            super().do_GET()
    
    def do_POST(self):
        # 处理数据上传和保存
        if self.path == '/api/save-data':
            self.handle_save_data()
        else:
            self.send_error(404, "File not found")
    
    def handle_api_request(self):
        if self.path == '/api/chart-data':
            self.send_chart_data()
        elif self.path == '/api/statistics':
            self.send_statistics()
        else:
            self.send_error(404, "API endpoint not found")
    
    def send_chart_data(self):
        # 模拟从文件或数据库获取数据
        sample_data = {
            "status": "success",
            "data": {
                "sales": [120, 150, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360],
                "users": [1000, 1500, 2000, 2500, 3000, 3500],
                "products": [1500, 2200, 1800, 3000, 2500]
            },
            "timestamp": datetime.now().isoformat()
        }
        
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps(sample_data).encode())
    
    def send_statistics(self):
        stats = {
            "status": "success",
            "statistics": {
                "total_datasets": 4,
                "chart_types": ["line", "bar", "pie", "scatter", "radar"],
                "last_updated": datetime.now().isoformat(),
                "data_points": 48
            }
        }
        
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps(stats).encode())
    
    def handle_save_data(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        
        try:
            data = json.loads(post_data.decode())
            
            # 保存数据到文件（在实际应用中可能保存到数据库）
            with open('saved_data.json', 'w', encoding='utf-8') as f:
                json.dump(data, f, ensure_ascii=False, indent=2)
            
            response = {
                "status": "success",
                "message": "数据保存成功",
                "saved_at": datetime.now().isoformat()
            }
            
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(response).encode())
            
        except Exception as e:
            self.send_error(500, f"保存数据时出错: {str(e)}")
    
    def log_message(self, format, *args):
        # 自定义日志格式
        print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] {format % args}")

def start_server(port=8080):
    # 切换到当前目录
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    with socketserver.TCPServer(("", port), DataVisualizationHandler) as httpd:
        print(f"数据可视化服务器启动在 http://localhost:{port}")
        print("按 Ctrl+C 停止服务器")
        
        # 自动打开浏览器
        webbrowser.open(f'http://localhost:{port}')
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n服务器已停止")

if __name__ == "__main__":
    start_server()