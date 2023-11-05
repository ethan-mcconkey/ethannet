---
title: 'Setting up SSH between two systems'
date: ''
---

# Installation

## Windows

Open the **Settings** app using the search bar or `Win + I` keyboard shortcut. Navigate to `Apps > Optional Features`. Then select "View features"

![View Features](../../images/posts/basics-of-ssh/view-features-button-windows-11.png)

In the search bar type "OpenSSH".

![Add an Optional Feature](../../images/posts/basics-of-ssh/add-an-optional-feature-window.png)

![OpenSSH](../../images/posts/basics-of-ssh/add-open-ssh-client-and-server.png)

Select **OpenSSH Client** on the connecting computer and **OpenSSH Server** on the host computer.

## Linux

### Ubuntu/Debian

On the connecting machine run the following:

```bash
$ sudo apt-get update
$ sudo apt-get install openssh-client
```

On the host machine run the following:

```bash
$ sudo apt-get update
$ sudo apt-get install openssh-server
```

# SSH Server

Ensure that the ssh server is running on the host machine.

## Windows

Navigate to the windows services menu via the search bar or by pressing `Win + R` and typing "services.msc" without the quotes. Search the list of services for "OpenSSH Server" and ensure that it is started and set to run on startup.
![Alt text](image.png)
![Alt text](image-1.png)
![Alt text](image-2.png)

# Generating SSH Keys

Open you preferred terminal (_bash/powershell/cmd/zsh_) and type the following command:

```
ssh-keygen -t ed25519 -C "Comment"
```

Replace "Comment" with some text to identify the host machine such as "server".

Give the ssh key a name such as "server". The filename requires a full path. On windows its normally `C:\Users\YOURNAME\.ssh\KEYNAME`, on linux its normally `/home/YOURNAME/.ssh/KEYNAME`.

Then provide a password for unlocking the ssh key, leaving the field blank will provide no password.

After you have entered the password you should see a `randomart` image similar to:
![Randomart Image](../../images/posts/basics-of-ssh/randomart.png)

# Configuration

## Windows

## Linux
