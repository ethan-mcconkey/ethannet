---
title: 'Setting up SSH between two systems'
date: '07 November 2023'
---

## The following content is based on the video below

[![OpenSSH for Absolute Beginners](https://img.youtube.com/vi/3FKsdbjzBcc/0.jpg)](https://youtu.be/3FKsdbjzBcc 'OpenSSH for Absolute Beginners')

(Veronica Explains, 2022)

# Is OpenSSH installed?

On your system open a terminal and type the following:

```bash
ssh -V
```

This should output the current ssh client version you currently have installed. Should you not have the ssh client installed please do the following:

## On Windows

Open the Services window using `Win + R` and typing _"services.msc"_ without the quotation marks. You can also open the Services window by opening the windows search and typing _"services"_

With the services window open search for _"OpenSSH Server"_ in the list of services and set it to start automatically and if it is not running currently, start the service.

Should the _"OpenSSH Server"_ service not be present you may have to install it by doing the following. Open the settings app with `Win + I` or by using the windows search to search for _"settings"_. Once in settings navigate to the following `Apps > Optional features > Add optional feature`. Once there search for _"OpenSSH"_ and install either the client or server depending on what the machine will be doing. Then repeat the above step to ensure the service is started and set to run on startup.

## On Linux

### On Ubuntu/Debian

Open a terminal and type the following:

Client:

```bash
sudo apt install openssh-client
```

Server:

```bash
sudo apt install openssh-server
```

Ensure that after installation that the SSH daemon is running. You can check this by running the following:

```bash
systemctl status ssh
```

or

```bash
systemctl status sshd
```

If the SSH daemon is not running you can start it by running:

```bash
sudo systemctl enable ssh
sudo systemctl start ssh
```

or

```bash
sudo systemctl enable sshd
sudo systemctl start sshd
```

# Generating SSH keys

The SSH keys should be generated on the client system and not on the server. You can generate a key on most OSes by running the following command:

```bash
ssh-keygen -t ed25519 -f "PATH/TO/SSH/KEYNAME" -C "A Comment to identify the key"
```

The path to the key needs to be a full path reference. On Windows its normally `C:\Users\USERNAME\.ssh\KEYNAME` and on linux its normally `/home/USERNAME/.ssh/KEYNAME`. Where _USERNAME_ is the current user and the _KEYNAME_ is the name of the SSH key. You can choose any path you want just remember it for later steps.

When prompted for a password you can leave it blank if you do not want to use a password. (**This is highly not recommended**)

After the command has run you should see two new files in the chosen directory **KEYNAME** and **KEYNAME.pub**

# Configuring the SSH server

Firstly we need to get the IP address of the server by running the following command:

## On Windows

```powershell
ipconfig
```

## On Linux

```bash
ip a
```

or

```bash
hostname -I
```

Back on the client we need to transfer our newly generated SSH public key to the server to allow it to authenticate us using the SSH keys. You can use a command to ake this transfer much easier:

```bash
ssh-copy-id -i "PATH/TO/PUBLIC/KEY" USER@SERVERIP
```

Where **USER** is the username on the server and not on the client. You should now be able to connect to the server using

```bash
ssh USER@SERVERIP
```

You should then be prompted for the password of the ssh key if you chose to set a password.

You can then also configure ssh to not accept password authentication once you confirm that the ssh key is working.

Open the ssh config file and add the following lines

```
PubkeyAuthentication yes
PasswordAuthentication no
```

To access the config files do the following:

## On Windows

Please run a terminal window with admin privileges then type the following.

```powershell
notepad "C:\ProgramData\ssh\sshd_config"
```

## On Linux

### Ubuntu/Debian

```bash
sudo nano /etc/ssh/sshd_config
```

---

You can then restart the server and your ssh key should still work but now you cannot connect with the less secure password authentication.

# References

Veronica Explains. (2022) OpenSSH for absolute beginners, YouTube. Available at: https://www.youtube.com/watch?v=3FKsdbjzBcc (Accessed: 09 November 2023).
