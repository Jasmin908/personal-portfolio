# =========================
# PHYSICS
# =========================
func _physics_process(delta: float) -> void:

	if is_dead:
		return

	# gravity
	if not is_on_floor():
		velocity.y += GRAVITY * delta

	handle_input()

	move_and_slide()

	check_landing()
	update_animation()


# =========================
# INPUT
# =========================
func handle_input() -> void:

	if is_attacking:
		velocity.x = 0
		return

	var direction: float = 0.0

	if Input.is_action_pressed("ui_left"):
		direction -= 1.0
	if Input.is_action_pressed("ui_right"):
		direction += 1.0

	velocity.x = direction * SPEED

	# ATTACK
	if Input.is_action_just_pressed("attack") and not is_attacking:

		is_attacking = true
		anim.play("attack")

		attack_hitbox.monitoring = true
		attack_shape.disabled = false

		await get_tree().create_timer(0.2).timeout

		attack_hitbox.monitoring = false
		attack_shape.disabled = true

		is_attacking = false
		return

	# JUMP
	if Input.is_action_just_pressed("ui_accept") and is_on_floor():

		if Input.is_action_pressed("ui_down"):
			drop_timer = 0.3
			velocity.y = 80.0
			return

		velocity.y = JUMP_VELOCITY
		play_sfx(jump_sfx)
