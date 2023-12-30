# ![Cloudflare Logo](https://emojis.slackmojis.com/emojis/images/1643514520/5156/cloudflare.png) CloudflareWorker-IP
Get your public IP address in plaintext, powered by [Cloudflare Workers](https://workers.cloudflare.com). No ads, no tracking, just IP's...

See an example at [ip.broomfieldnetworks.com](https://ip.broomfieldnetworks.com)

# :rocket: Deploy
[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/MaxBroome/CloudflareWorker-IP)

*Or, do it manually.*
1. [Create a Cloudflare account](https://dash.cloudflare.com/sign-up)
2. On your account home look at the right side of the page and click "Workers"
3. Click **"Create Worker"**
> (Optional) Change the URL by clicking on the text box at the top left corner of the page
4. Paste the content of ```cf.js``` from this repo to the Script tab
5. Click "Save and Deploy"

# :globe_with_meridians: Usage
<table>
<tr>
<td>On Linux and <a href="https://docs.microsoft.com/en-us/windows/wsl/about">WSL</a> or Windows Command Prompt</td> <td>On Windows Powershell</td>
</tr>
<tr>
<td>

```bash
curl ip.broomfieldnetworks.com
```

</td>
<td>

```ps1
Invoke-WebRequest 'ip.broomfieldnetworks.com' | Select-Object -Expand Content
```

</td>
</tr>
</table>

> [!NOTE]
> This script only shows the IP address that connected to it. So if you have IPv4 *and* IPv6, it will only show you the IP in which you connected to it with. Most of the time it will be IPv6.
