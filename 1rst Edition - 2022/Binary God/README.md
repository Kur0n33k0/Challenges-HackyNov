<div align="center">
  <a href="https://hackynov.fr"><img src="https://i.imgur.com/XGJF8Xu.png" alt="Hacky'Nov" width="50%"></a>
  <br><br>
  
  ![Discord](https://img.shields.io/discord/897766049099956284?label=Discord&style=for-the-badge)
  ![Twitter Follow](https://img.shields.io/twitter/follow/HackyNov?color=%231d9bf0&label=Twitter&style=for-the-badge)
  ![Twitch Status](https://img.shields.io/twitch/status/hackynov?color=%23772ce8&style=for-the-badge)
  ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Kur0n33k0/HackyNov_CTFD?color=green&label=size&style=for-the-badge)
  
  <p>Follow us on</p>
  <a href="https://www.linkedin.com/company/hacky-nov/">Linkedin</a>
  •
  <a href="https://twitter.com/HackyNov">Twitter</a>
  •
  <a href="https://discord.gg/JGue7PhV">Discord</a>
  •
  <a href="https://www.twitch.tv/hackynov">Twitch</a>
  •
  <a href="">Youtube (coming soon)</a>
</div>

----
## Contact me

Pseudo : Kur0n33k0<br/>
Pro : [Antoine Sirven](https://www.linkedin.com/in/antoine-sirven-as/)

# Write-up

| Challenge name  | Category | Points | Submissions | Autor |
|-----------------|---------------|------------------|----------------------|----------------------|
| Binary God      | Cryptanalysis  | 100 | 08/11 | [Kur0n33k0](https://www.linkedin.com/in/antoine-sirven-as/)|

<img src="https://i.imgur.com/rLBXSz1.png" alt="Binary God" width="50%" align="center">

When reading, we can understand that "06879054" is the number to call the Binary God. So we turn it into binary.

In any converter, we get 00110000 00110110 00111000 00110111 00111001 00110000 00110101 00110100.

The symbol on top of the page is that of XOR who is a type of additive cipher. So we take the binary previously found and we decrypt "|S\^\EQAR_VVPBPQH_KC\@TG" using the binary as a key.

After the decryption is complet, we got "Ledieudubinaireexistepas".

**FLAG: HACKYNOV{Ledieudubinaireexistepas}**
**AND GOOD JOB IT'S DONE !**
