@echo off
echo 🚀 启动情侣博客...
echo.
echo 💕 正在检查Jekyll环境...

:: 检查是否安装了Ruby和Jekyll
ruby --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 请先安装Ruby: https://rubyinstaller.org/
    pause
    exit /b
)

echo ✅ Ruby环境正常
echo.

:: 检查bundle
gem list bundle -i >nul 2>&1
if %errorlevel% neq 0 (
    echo 📦 正在安装bundle...
    gem install bundler
)

:: 安装依赖
echo 📦 正在安装依赖...
bundle install

if %errorlevel% neq 0 (
    echo ❌ 依赖安装失败，请检查网络连接
    pause
    exit /b
)

echo ✅ 依赖安装完成
echo.
echo 🌟 启动本地服务器...
echo.
echo 💝 博客地址: http://localhost:4000
echo 📝 按 Ctrl+C 停止服务器
echo.

bundle exec jekyll serve --host=0.0.0.0 --port=4000 --livereload