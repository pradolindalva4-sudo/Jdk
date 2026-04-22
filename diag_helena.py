import json
import os

def check_system():
    print("--- DIAGNÓSTICO HELENA v13.5 ---")
    files = ['coracao.json', 'corpo_jdp.js', 'vigia_jdp.json', 'index.html']
    for f in files:
        if os.path.exists(f):
            print(f"[OK] {f} presente na base.")
        else:
            print(f"[ERRO] {f} desapareceu!")

if __name__ == "__main__":
    check_system()
