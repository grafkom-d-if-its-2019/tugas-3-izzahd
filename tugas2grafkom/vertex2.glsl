precision mediump float;
attribute vec2 vPosition;

uniform float theta;
uniform float scale;


void main() {

  gl_Position = vec4(vPosition, 0.0, 1.0); 

mat4 translasi = mat4(
    1.0, 0.0, 0.0, 0.25,  
    0.0, 1.0, 0.0, -0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
  );

  gl_Position = gl_Position * translasi;

  mat4 rotasi = mat4(
    cos(theta), -sin(theta), 0.0, 0.0,
    sin(theta), cos(theta), 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
  );
  gl_Position = gl_Position * rotasi;

  mat4 translasi2 = mat4(
    1.0, 0.0, 0.0, -0.25,  
    0.0, 1.0, 0.0, -0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
  );
  gl_Position = gl_Position * translasi2;


  mat4 skalasi = mat4(
    scale, 0.0, 0.0, 0.0,
    0.0, 1.0, 0.0, 0.0,
    0.0, 0.0, 1.0, 0.0,
    0.0, 0.0, 0.0, 1.0
  );

}
