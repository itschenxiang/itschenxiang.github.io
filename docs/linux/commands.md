## 1. 查看文件
#### more
```shell
more
-N 指定每一页的行数
+N 从文件第N行开始显示
-p 不滚动，清理屏幕并显示文本
-c 不滚动，显示文本并清理行尾
```

执行命令后：
```shell
q 退出
space 下一页
enter 下一行
/STRING 向下查找字符串
b 往回翻页，只对文件有用，对管道无用
```

#### less
```shell

```

执行命令后：
```shell
space 下一页
pagedown 下一页
pageup 上一页
/STRING 向下查找字符串
?STRING 向上查找字符串
n 重复前一个查找
```
> mac 的 pageup 和 pagedown 分别是`fn+上方向键`和`fn+下方向键`。

#### head tail
```shell
head -n 100 [filename] 前100行
head -n -100 [filename] 除了后100行的所有内容
```
```shell
tail -n 100 [filename] 后100行
tail -n +100 [filename] 100行及之后的所有内容
tail -f [filename] 数据实时显示到屏幕
```

## 管道
#### grep
```shell
grep
-n 显示行号
-c 计数
-i 忽略大小写
-v 反选，表示返回不包含指定字符串的行
```

## 解压缩文件
#### zip
压缩文件：
```shell
zip target.zip source_filename
```
压缩文件夹：
```shell
zip -r target.zip source_dirname
```
其他选项：
```shell
zip
-q 不显示指令执行过程
-v 显示指令执行过程或显示版本信息
```
对应解压缩命令：
```shell
unzip source.zip
-q 不显示指令执行过程
-v 显示指令执行过程或显示版本信息
```
