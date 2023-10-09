---
title: "MKCD Command on linux"
publishedDate: "06-10-2023"
editedDate: "06-10-2023"
---

The mkcd command is a custom command that creates a new directory and then changes directories into it. Similar to running the following.

```bash
mkdir FOLDER_NAME
cd FOLDER_NAME
```

### Add the following to the _.bashrc_ file

```bash
function mkcd {
	if [ $1 ]; then
		if [ -d $1 ]; then
			cd $1
		else
			mkdir $1 && cd $1
		fi
	else
		echo "mkcd requires a single parameter with the folder name"
	fi
}
```
