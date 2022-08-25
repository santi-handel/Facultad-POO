import random
import tkinter as tk
from tkinter import ttk
from tkinter import messagebox as ms

#funciones
    
def juego():
    cpu=random.randrange(0,3)
    if varUser.get()==0:
        if cpu==0:
            ms.showinfo("Resultado","Has elegido piedra y tu rival tambien, EMPATAN")
        elif cpu==1:
            ms.showinfo("Resultado","Has elegido piedra y tu rival papel, HAS PERDIDO")    
        elif cpu==2:
            ms.showinfo("Resultado","Has elegido piedra y tu rival tijeras, HAS GANADO")
        else:
            ms.showerror("Error","Paso algo")
    if varUser.get()==1:
        if cpu==0:
            ms.showinfo("Resultado","Has elegido papel y tu rival piedra, HAS GANADO")
        elif cpu==1:
            ms.showinfo("Resultado","Has elegido papel y tu rival tambien, EMPATAN")    
        elif cpu==2:
            ms.showinfo("Resultado","Has elegido papel y tu rival tijeras, HAS PERDIDO")
        else:
            ms.showerror("Error","Paso algo")
    if varUser.get()==2:
        if cpu==0:
            ms.showinfo("Resultado","Has elegido tijeras y tu rival piedra, HAS PERDIDO")
        elif cpu==1:
            ms.showinfo("Resultado","Has elegido tijeras y tu rival papel, HAS GANADO")    
        elif cpu==2:
            ms.showinfo("Resultado","Has elegido tijeras y tu rival tambien, EMPATAN")
        else:
            ms.showerror("Error","Paso algo")
#interfaz
main=tk.Tk()
main.geometry("500x500")
main.title("Piedra, Papel o Tijeras!")
#variables
varUser=tk.IntVar(main)
#
ttk.Label(main,text="Seleccione 1 opcion").place(x=10,y=10)
rbton1=ttk.Radiobutton(main,text="Piedra",variable=varUser,value=0)
rbton1.place(x=10,y=30)
rbton2=ttk.Radiobutton(main,text="Papel",variable=varUser,value=1)
rbton2.place(x=100,y=30)
rbton3=ttk.Radiobutton(main,text="Tijeras",variable=varUser,value=2)
rbton3.place(x=200,y=30)
ttk.Button(main,text="Jugar!",command=juego).place(x=10,y=200)

main.mainloop()