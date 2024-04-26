## hdfs shell 常用命令
```
hdfs dfs -help
```
#### 
```
hdfs dfs -ls
```
#### 创建目录
```
hdfs dfs -mkdir <dir_name>
```
#### 从本地上传文件到 hdfs
```
hdfs dfs put <local_file> <hdfs_dir_name>
```
#### 查看指定文件内容
```
hdfs dfs -cat <file_path>
```
#### 从本地剪切粘贴到 hdfs
```
hdfs dfs -moveFromLocal <source_file_path> <target_hdfs_dir_name>
```
#### 追加一个文件到已经存在的文件末尾
```
hdfs dfs -appendToFile <source_file_path> <target_hdfs_file_name>
```
#### 从 hdfs 的一个路径拷贝 hdfs 的另一个路径
```
hdfs dfs -cp <source_hdfs_file_path> <target_hdfs_dir_name>
```
#### 在 hdfs 目录中移动文件
```
hdfs dfs -mv <source_hdfs_file_path> <target_hdfs_dir_name>
```
#### get: 等同于 copyToLocal，就是从 hdfs 下载文件到本地
```
hdfs dfs -get <hdfs_file_path> <local_dir_name>
```
#### getmerge: 合并下载多个文件
```
hdfs dfs -getmerge <hdfs_file_set> <local_file_path>
```
#### 删除 hdfs 文件或文件夹
```
hdfs dfs -rm <file_path>
```
#### 统计文件系统可用空间信息
```
hdfs dfs -df -h
```
#### du
```
hdfs dfs -
```
#### count
```
hdfs dfs -
```
#### 查看回收站信息
```

```
