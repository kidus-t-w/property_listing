const publicKey = `
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqycDj+M3aJXhEuvHiWG0
/Xqx6Gt3t3ELtJrSzHqwtAyy1VVB1UP52Dw0nRnWjVPhzRdDXRdpLA8ZnfrsDXx7
bNoiWIs7dQpv7mcPY1yFPHeITpaZcb40yIaHXTbnOcviVJSVa7rXLlnDGrL4SdXz
RdxIl3iilN/w4lSDaMg+JCpT0O0w3Qzh9XA7Flx9WyqsZagPNmJKs5e3FfUVv074
aul1kyd2ttIGFDLZRM3w5ay9QaS/hAW8fB/EnuCDd1DaQyIEmeszIx7GXUlaw0GK
oWFfNJDQmLivfC3QNK142X2iJV0EyyqZ/56+9Kq/PnDpFXrXrPHZp8tWScecIyGq
VQIDAQAB
-----END PUBLIC KEY-----`

const privateKey = `
-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCrJwOP4zdoleES
68eJYbT9erHoa3e3cQu0mtLMerC0DLLVVUHVQ/nYPDSdGdaNU+HNF0NdF2ksDxmd
+uwNfHts2iJYizt1Cm/uZw9jXIU8d4hOlplxvjTIhoddNuc5y+JUlJVrutcuWcMa
svhJ1fNF3EiXeKKU3/DiVINoyD4kKlPQ7TDdDOH1cDsWXH1bKqxlqA82Ykqzl7cV
9RW/Tvhq6XWTJ3a20gYUMtlEzfDlrL1BpL+EBbx8H8Se4IN3UNpDIgSZ6zMjHsZd
SVrDQYqhYV80kNCYuK98LdA0rXjZfaIlXQTLKpn/nr70qr8+cOkVetes8dmny1ZJ
x5wjIapVAgMBAAECggEAHOo6b9SzR7gKjmfHDi6zpR9Vby64ywUONTTy6BjSQZjj
nacJuD4Dt8R0HxZ+aOIDA+MqPk/2NLtYWJhLyPt+3qT7qHndUaixwFUpBGBdIhoP
rTdENTMtN7OCqvzbk6geVKvFkq2+LNZ9X8VcrRy4PNU6blyzGvO6foJIsSsjVHiL
djcplxPS0D4bulSmFBLQ8FIGIrygbhYJBJ3O/OTtUKzIlmyrhdbLQ+hWYf80i8RO
IAchdv0x+v5dQ3E8VnHGDg0hlsv2Zodkk09RYPMOypCF0dvkbshI79Vrdr7K2WsK
JihgnbC/FqjAxL58o28ggAfsCMCMHqjeSI11o+3HAQKBgQDQt2KR6meVllyLnutA
4W7CWsi7AACDzUe9lbIc9iphe7JxflsNx1qg2FgmiOPakJ2JmaKy69bcfY7Zqr4h
mIm9Y9qLMvhR23sT4vZXj3NvU9Gq7S0JufUoOTJscvP4BHy46udLOCRqaQNtdz9D
Mwf3psw8Jp679m3AuPL9AuASJwKBgQDR7RZ2qjJjNrtcxjs3GDvMX+P9KnrcG831
7N3k7mqkfiYnhYJgXmU+JHbyIAoe9Qop8AZ0OMTdNyjF6uuizW8lwT1+fZJjz9RF
1lmQJOejfyZDBYAd7gHewA95rAfk5YPJwW4rYE+CSLzPsrVw5uIxc6qhDumR3341
t8XdnTe5IwKBgQCyjqDqWlIB3GASJoP2vqWl6kreCFNobr9YRu/Y7RQ2z79KbyHw
uMMk5dEMLoJYIu5ToLdbQH5Rpa0HNJZyYXA9MWbvPUzJou45hirfn97OuDOgekXU
k11T6xLjSrjDTvtwq63yYPZufqarCKB7mfXP/ceuEhAsl9cvUEq4/7O4cwKBgBkk
RQF3RsudHXlyAFuL2nWSsnJ6qPY9mkAu2zB04W7L8PPgyImUJJn5sgkzjyLABDSb
m5pFxkYcOhTiGtCHvB0QdLX2ghbUKD8o+dcKpHdvXfy+5uYuwCiWZgQTd2qRlmQO
d4xYX41h+sMBSzu3WzXC/ZeGerDOzIXQebEeCDNzAoGAaSmbFIzE1lM+y+gL58lL
Qs8h8JxUTdhU0o7TH0Yn3P/PGTkhn8IS+HSBQ6QI/I3Y5WHS7LhCBQ6HYtt+dUbc
goNFJeK0XmODIQ3Ci80LYYvlr33zKwdCKuv+ZQk3ADeQql/VyjtGzEFSuTK7IK3/
WXq6XLf2L6oEAJKWYrm6sus=
-----END PRIVATE KEY-----`

export default {
  port: 1337,
  dbUri: "mongodb://localhost:27017/rest-api-tutorial",
  saltWorkFactor: 10,
  accessTokenTtl: "1h",
  refreshTokenTtl: "7d",
  publicKey,
  privateKey,
};
