package com.jocarsa.dibujoanimado

import android.content.Context
import android.graphics.Canvas
import android.graphics.Color
import android.graphics.Paint
import android.os.Parcel
import android.os.Parcelable
import android.util.AttributeSet
import android.view.SurfaceHolder
import android.view.SurfaceView
import kotlin.random.Random

// Definimos una clase personalizada que hereda de SurfaceView y maneja su propio dibujo
class MiDibujoPersonalizado(context: Context, attrs: AttributeSet? = null) : SurfaceView(context, attrs), SurfaceHolder.Callback {

    // Variables para la posición del círculo en la pantalla
    private var x: Float = 100f  // Posición inicial en X
    private var y: Float = 100f  // Posición inicial en Y
    private var direccion: Float = 0f  // Dirección de movimiento

    // Configuración de las pinturas para el dibujo
    private val pinturaroja = Paint().apply {
        color = Color.RED  // Color rojo
        style = Paint.Style.STROKE  // Solo el contorno
        strokeWidth = 20f  // Ancho del contorno
    }

    private val pinturaverde = Paint().apply {
        color = Color.GREEN  // Color verde (no se usa en este código)
        style = Paint.Style.STROKE
        strokeWidth = 8f
    }

    init {
        // Agregamos el callback para manejar eventos del SurfaceView
        holder.addCallback(this)
    }

    /**
     * Método que se ejecuta cuando la superficie de dibujo se crea.
     * Aquí iniciamos un hilo para actualizar la animación.
     */
    override fun surfaceCreated(holder: SurfaceHolder) {
        Thread {
            while (true) {  // Bucle infinito para la animación
                val canvas = holder.lockCanvas()  // Bloqueamos el canvas para dibujar
                canvas?.let {
                    // Actualizamos la posición del círculo en función de la dirección
                    x += Math.cos(direccion.toDouble()).toFloat()
                    y += Math.sin(direccion.toDouble()).toFloat()

                    // Modificamos la dirección ligeramente para simular un movimiento aleatorio
                    direccion += Random.nextFloat() * 0.2f - 0.1f  // Variación de -0.1 a 0.1 radianes

                    // Dibujamos en el lienzo
                    pinta(it)

                    // Liberamos el canvas para que se muestre en pantalla
                    holder.unlockCanvasAndPost(it)
                }
                Thread.sleep(50)  // Pausa de 50ms entre cada frame para controlar la velocidad
            }
        }.start()  // Iniciamos el hilo
    }

    /**
     * Método encargado de dibujar en el canvas.
     * En este caso, borra la pantalla y dibuja un círculo rojo en la posición actual.
     */
    private fun pinta(canvas: Canvas) {
        canvas.drawColor(Color.WHITE)  // Fondo blanco

        // Dibujamos un círculo rojo en la posición (x, y) con un radio de 150 píxeles
        canvas.drawCircle(x, y, 150f, pinturaroja)
    }

    // Métodos vacíos porque no los necesitamos en este caso
    override fun surfaceChanged(holder: SurfaceHolder, format: Int, width: Int, height: Int) {}

    override fun surfaceDestroyed(holder: SurfaceHolder) {}
}