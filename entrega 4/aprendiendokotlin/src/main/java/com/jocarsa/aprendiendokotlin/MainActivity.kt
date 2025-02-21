package com.jocarsa.aprendiendokotlin

import android.os.Bundle
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main)
        ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main)) { v, insets ->
            val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
            v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
            insets
        }

        // Esto es un comentario de una linea

        /*
            Esto es un comentario multilinea
            Y esta es otra linea
        */
        println("Hola mundo desde Kotlin")
        /*
        // Salidas
        Toast.makeText(this,(4+3).toString(), Toast.LENGTH_SHORT).show()
        Toast.makeText(this,(4-3).toString(), Toast.LENGTH_SHORT).show()
        Toast.makeText(this,(4*3).toString(), Toast.LENGTH_SHORT).show()
        Toast.makeText(this,(4/3).toString(), Toast.LENGTH_SHORT).show()
        */

/*
        // Variables
        var nombre = "luis sanchez "
        nombre = "Juan"
        Toast.makeText(this,nombre, Toast.LENGTH_SHORT).show()
*/
/*
        // Constantes
        var PI = 3.1416
        PI = 4
        Toast.makeText(this,PI.toString(), Toast.LENGTH_SHORT).show()
*/
/*
        // Tipos inferidos
        val numero = 5
        val decimal = 5.44
        val letra = "a"
        val booleano = true
        val cadena = "luis  sanchez diaz "

*/
/*
        // Tipos de datos
        val numero:Int = 5
        val decimal:Double = 5.33
        val letra:Char = 'a'
        val booleano:Boolean = true
        val cadena:String = "luis sanchez diaz"
*/
/*
        // Operadores matemáticos abreviados
         var edad:Int = 46
        edad += 5
        Toast.makeText(this,edad.toString(), Toast.LENGTH_SHORT).show()
        edad -= 5
        Toast.makeText(this,edad.toString(), Toast.LENGTH_SHORT).show()
        edad *= 5
        Toast.makeText(this,edad.toString(), Toast.LENGTH_SHORT).show()
        edad /= 5
        Toast.makeText(this,edad.toString(), Toast.LENGTH_SHORT).show()
*/
/*
        // Operadores de comparación
        Toast.makeText(this,(4<3).toString(), Toast.LENGTH_SHORT).show()
        Toast.makeText(this,(4>3).toString(), Toast.LENGTH_SHORT).show()
        Toast.makeText(this,(4<=3).toString(), Toast.LENGTH_SHORT).show()
        Toast.makeText(this,(4>=3).toString(), Toast.LENGTH_SHORT).show()
        Toast.makeText(this,(4==3).toString(), Toast.LENGTH_SHORT).show()
        Toast.makeText(this,(4!=3).toString(), Toast.LENGTH_SHORT).show()
*/
/*
        // Operadores booleanos
        var resultado:Boolean = 4 == 4 && 3 == 3 && 2 == 2
        Toast.makeText(this,resultado.toString(), Toast.LENGTH_SHORT).show()

        resultado = 4 == 4 && 3 == 3 && 2 == 1
        Toast.makeText(this,resultado.toString(), Toast.LENGTH_SHORT).show()

        resultado = 4 == 4 || 3 == 3 || 2 == 2
        Toast.makeText(this,resultado.toString(), Toast.LENGTH_SHORT).show()

        resultado = 4 == 4 || 3 == 3 || 2 == 1
        Toast.makeText(this,resultado.toString(), Toast.LENGTH_SHORT).show()

        resultado = 4 == 4 || 3 == 2 || 2 == 1
        Toast.makeText(this,resultado.toString(), Toast.LENGTH_SHORT).show()

        resultado = 4 == 3 || 3 == 2 || 2 == 1
        Toast.makeText(this,resultado.toString(), Toast.LENGTH_SHORT).show()
*/
/*
        // Arrays
        var nombres = arrayOf("luis sanchez ","pablo","bilbao","ricardo")
        Toast.makeText(this,nombres[0].toString(), Toast.LENGTH_SHORT).show()
        nombres[0] = "luis pablo"
        Toast.makeText(this,nombres[0].toString(), Toast.LENGTH_SHORT).show()
        var longitud = nombres.size
        Toast.makeText(this,longitud.toString(), Toast.LENGTH_SHORT).show()
*/

        // Estructuras de control condicional
/*
        var edad:Int = 18
        if(edad < 10){
            Toast.makeText(this,"Eres un niño", Toast.LENGTH_SHORT).show()
        }else if(edad >= 10 && edad < 20){
            Toast.makeText(this,"Eres un adolescente", Toast.LENGTH_SHORT).show()

        }else if(edad in 20..29){
            Toast.makeText(this,"Eres un joven", Toast.LENGTH_SHORT).show()

        }else{
            Toast.makeText(this,"Ya no eres un joven", Toast.LENGTH_SHORT).show()
        }
*/

/*
        var diadelasemana:Int = 10
        var resultado = when(diadelasemana){
            1 -> "Hoy es el peor día de la semana"
            2 -> "Hoy es el segundo peor día de la semana"
            3 -> "ya no es tan malo"
            4 -> "Ya es juernes"
            5 -> "Por fin es viernes"
            6 -> "El mejor dia de la semana"
            7 -> "Parece mentira que mañana ya sea lunes"
            else -> "Caso no valido"
        }
        Toast.makeText(this,resultado.toString(), Toast.LENGTH_SHORT).show()

*/
        // Estructuras de bucle
/*
        var nombres = arrayOf("luis sanchez ","pablo","ricardo","bilbao")
        for(nombre in nombres){
            Toast.makeText(this,nombre.toString(), Toast.LENGTH_SHORT).show()
        }
*/

/*
        var rangodias = 1..31
        for(dia in rangodias){
            Toast.makeText(this,dia.toString(), Toast.LENGTH_SHORT).show()
        }
*/

        // Estructura while
        /*
        var dia = 1
        while(dia < 31){
            Toast.makeText(this,dia.toString(), Toast.LENGTH_SHORT).show()
            dia+=1
        }

         */
        // Uso de funciones
/*
        saluda()
        saludaNombre("lui sanchez ")
        saludaNombre("luis sanchez",46)
        Toast.makeText(this,saludaNombreReturn("lui sanchez",46), Toast.LENGTH_SHORT).show()

*/

        // Programación orientada a objetos
        // Creación de un objeto de la clase Gato con valores iniciales
        var gato1 = Gato("Micifu", "naranja", 0)
        // Muestra un mensaje con el sonido del gato utilizando la función maulla()
        Toast.makeText(this, gato1.maulla(), Toast.LENGTH_SHORT).show()
    }

    // Función sin parámetros que muestra un mensaje de saludo
    fun saluda() {
        Toast.makeText(this, "Yo te saludo", Toast.LENGTH_SHORT).show()
    }

    // Función que recibe un nombre como parámetro y muestra un saludo personalizado
    fun saludaNombre(nombre: String) {
        Toast.makeText(this, "Hola, $nombre, yo te saludo", Toast.LENGTH_SHORT).show()
    }

    // Función que recibe un nombre y una edad como parámetros y muestra un mensaje con ellos
    fun saludaNombre(nombre: String, edad: Int) {
        Toast.makeText(this, "Hola, $nombre, yo te saludo y que sepas que tienes $edad años", Toast.LENGTH_SHORT).show()
    }

    // Función que recibe un nombre y una edad como parámetros y devuelve un mensaje en lugar de mostrarlo directamente
    fun saludaNombreReturn(nombre: String, edad: Int): String {
        return "Hola, $nombre, yo te saludo y que sepas que tienes $edad años"
    }
}


